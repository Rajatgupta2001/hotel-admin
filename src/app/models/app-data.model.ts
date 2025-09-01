/**
 * Main Application Data Model for Local Storage
 */

import { OutboxData, DEFAULT_OUTBOX_DATA } from './common.types';

// Flexible types for compatibility with existing storage service
export interface AppData {
  hotel: Record<string, unknown> | null;
  roomTypes: Record<string, unknown>[];
  rooms: Record<string, unknown>[];
  ratePlans: Record<string, unknown>[];
  taxes: Record<string, unknown>[];
  policies: {
    cancellation: Record<string, unknown>[];
    booking: Record<string, unknown>[];
  };
  amenities: Record<string, unknown>[];
  users: Record<string, unknown>[];
  outbox: OutboxData;
  lastModified: string;
  version: string;
}

export interface ImportExportData extends AppData {
  exportDate: string;
  exportedBy?: string;
}

// Default/empty state for the app
export const DEFAULT_APP_DATA: AppData = {
  hotel: null,
  roomTypes: [],
  rooms: [],
  ratePlans: [],
  taxes: [],
  policies: {
    cancellation: [],
    booking: [],
  },
  amenities: [],
  users: [],
  outbox: { ...DEFAULT_OUTBOX_DATA },
  lastModified: new Date().toISOString(),
  version: '1.0.0',
};
