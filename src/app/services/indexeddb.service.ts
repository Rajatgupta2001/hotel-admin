import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { HotelStore } from './hotel-store.service';
import { HotelData } from '../models/hotel-data.model';

interface OutboxItem {
  id?: number;
  type: string;
  payload: unknown;
  createdAt: string;
}

interface HMSchema extends DBSchema {
  hotelData: {
    key: 'singleton';
    value: HotelData; // single HotelData JSON
  };
  outbox: {
    key: number;
    value: OutboxItem;
    indexes: { 'by-createdAt': string };
  };
}

@Injectable({ providedIn: 'root' })
export class IndexedDbService {
  private dbPromise: Promise<IDBPDatabase<HMSchema>> | null = null;
  private store = inject(HotelStore);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor() {
    if (this.isBrowser) {
      this.dbPromise = openDB<HMSchema>('hms-offline', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('hotelData')) {
            db.createObjectStore('hotelData');
          }
          if (!db.objectStoreNames.contains('outbox')) {
            const store = db.createObjectStore('outbox', {
              keyPath: 'id',
              autoIncrement: true,
            });
            store.createIndex('by-createdAt', 'createdAt');
          }
        },
      });
    }
  }

  async getHotelData(): Promise<HotelData | null> {
    if (!this.dbPromise) return this.store.getSnapshot();
    const db = await this.dbPromise;
    return (await db.get('hotelData', 'singleton')) ?? this.store.getSnapshot();
  }

  async saveHotelData(
    data: HotelData,
  ): Promise<{ success: boolean; errors?: string[] }> {
    // Validate and set via store first
    const res = this.store.replaceAll(data);
    if (!res.ok) return { success: false, errors: res.errors };

    if (!this.dbPromise) {
      // No IndexedDB (SSR) – state already set in store
      return { success: true };
    }

    const db = await this.dbPromise;
    await db.put('hotelData', this.store.getSnapshot(), 'singleton');
    return { success: true };
  }

  async export(): Promise<string> {
    // Export current store snapshot (authoritative)
    return this.store.export();
  }

  async import(json: string): Promise<{ success: boolean; errors?: string[] }> {
    try {
      const parsed = JSON.parse(json) as HotelData;
      const res = this.store.replaceAll(parsed);
      if (!res.ok) return { success: false, errors: res.errors };

      if (this.dbPromise) {
        const db = await this.dbPromise;
        await db.put('hotelData', this.store.getSnapshot(), 'singleton');
      }
      return { success: true };
    } catch {
      return { success: false, errors: ['Invalid JSON'] };
    }
  }

  async clearHotelData(): Promise<void> {
    if (!this.dbPromise) return; // no-op on server
    const db = await this.dbPromise;
    await db.delete('hotelData', 'singleton');
  }

  // Outbox helpers for future sync
  async addToOutbox(type: string, payload: unknown): Promise<void> {
    if (!this.dbPromise) return; // no-op on server
    const db = await this.dbPromise;
    const item: OutboxItem = {
      type,
      payload,
      createdAt: new Date().toISOString(),
    };
    await db.add('outbox', item as Required<OutboxItem>);
  }

  async listOutbox(): Promise<OutboxItem[]> {
    if (!this.dbPromise) return [];
    const db = await this.dbPromise;
    const tx = db.transaction('outbox');
    const idx = tx.store.index('by-createdAt');
    const results: OutboxItem[] = [];
    let cursor = await idx.openCursor();
    while (cursor) {
      results.push(cursor.value);
      cursor = await cursor.continue();
    }
    await tx.done;
    return results;
  }

  async clearOutbox(): Promise<void> {
    if (!this.dbPromise) return; // no-op on server
    const db = await this.dbPromise;
    await db.clear('outbox');
  }
}
