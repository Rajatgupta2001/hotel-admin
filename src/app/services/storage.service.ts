import { Injectable, inject } from '@angular/core';
import {
  AppData,
  DEFAULT_APP_DATA,
} from '../models';
import { ValidationService, ValidationResult } from './validation.service';
import { BackupService } from './backup.service';

// Type aliases for compatibility with old model structure
type Hotel = Record<string, unknown>;
type RoomType = Record<string, unknown>;
type Room = Record<string, unknown>;
type RatePlan = Record<string, unknown>;
type Tax = Record<string, unknown>;
type CancellationPolicy = Record<string, unknown>;
type BookingPolicy = Record<string, unknown>;
type Amenity = Record<string, unknown>;
type User = Record<string, unknown>;

interface PartialPolicies {
  cancellation?: CancellationPolicy[];
  booking?: BookingPolicy[];
}

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly STORAGE_KEY = 'hotel-admin-data';
  private validator = inject(ValidationService);
  private backupService = inject(BackupService);

  // SSR-safe localStorage accessor
  private get browserStorage(): Storage | null {
    try {
      const g = globalThis as unknown as { localStorage?: Storage };
      return typeof g !== 'undefined' && typeof g.localStorage !== 'undefined'
        ? g.localStorage
        : null;
    } catch {
      return null;
    }
  }

  // General storage methods for settings and other data
  getItem<T>(key: string): T | null {
    const ls = this.browserStorage;
    if (!ls) return null;

    try {
      const item = ls.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error retrieving item ${key}:`, error);
      return null;
    }
  }

  setItem<T>(key: string, value: T): boolean {
    const ls = this.browserStorage;
    if (!ls) return false;

    try {
      ls.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error storing item ${key}:`, error);
      return false;
    }
  }

  removeItem(key: string): boolean {
    const ls = this.browserStorage;
    if (!ls) return false;

    try {
      ls.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item ${key}:`, error);
      return false;
    }
  }

  // Public helpers
  hasPersistedData(): boolean {
    const ls = this.browserStorage;
    return !!ls && ls.getItem(this.STORAGE_KEY) !== null;
  }

  clearAllData(): void {
    const ls = this.browserStorage;
    if (ls) ls.removeItem(this.STORAGE_KEY);
  }

  // Load snapshot from localStorage or default
  private load(): AppData {
    const ls = this.browserStorage;
    const raw = ls?.getItem(this.STORAGE_KEY);
    if (!raw) return { ...DEFAULT_APP_DATA };
    try {
      const parsed = JSON.parse(raw) as unknown;
      return this.validate(parsed);
    } catch {
      return { ...DEFAULT_APP_DATA };
    }
  }

  // Save snapshot to localStorage
  private save(data: AppData): void {
    const ls = this.browserStorage;
    data.lastModified = new Date().toISOString();
    if (ls) {
      try {
        const jsonString = JSON.stringify(data);
        ls.setItem(this.STORAGE_KEY, jsonString);
        console.log('✅ Data saved to localStorage:', {
          key: this.STORAGE_KEY,
          size: new Blob([jsonString]).size,
          lastModified: data.lastModified,
          dataPreview: {
            hotel: data.hotel?.['hotelname'] || 'No hotel',
            roomTypes: data.roomTypes.length,
            rooms: data.rooms.length,
            amenities: data.amenities.length,
            users: data.users.length,
          },
        });
        // Trigger auto backup after data changes
        this.backupService.triggerAutoBackupOnDataChange();
      } catch (error) {
        console.error('❌ Error saving data to localStorage:', error);
      }
    } else {
      console.warn('⚠️ localStorage not available');
    }
  }

  // Ensure minimum shape
  private validate(data: unknown): AppData {
    const d = data as Partial<AppData> & { policies?: PartialPolicies };
    return {
      hotel: d?.hotel ?? null,
      roomTypes: Array.isArray(d?.roomTypes) ? d.roomTypes : [],
      rooms: Array.isArray(d?.rooms) ? d.rooms : [],
      ratePlans: Array.isArray(d?.ratePlans) ? d.ratePlans : [],
      taxes: Array.isArray(d?.taxes) ? d.taxes : [],
      policies: {
        cancellation: Array.isArray(d?.policies?.cancellation)
          ? d.policies!.cancellation!
          : [],
        booking: Array.isArray(d?.policies?.booking)
          ? d.policies!.booking!
          : [],
      },
      amenities: Array.isArray(d?.amenities) ? d.amenities : [],
      users: Array.isArray(d?.users) ? d.users : [],
      lastModified: d?.lastModified || new Date().toISOString(),
      version: d?.version || '1.0.0',
    } as AppData;
  }

  // Public API (synchronous)
  getSnapshot(): AppData {
    return this.load();
  }

  // Hotel
  getHotel(): Hotel | null {
    return this.load().hotel;
  }
  setHotel(hotel: Hotel): void {
    const data = this.load();
    if (!hotel['id']) hotel['id'] = data.hotel?.['id'] ?? 1;
    data.hotel = hotel;
    this.save(data);
  }

  // Room Types
  getRoomTypes(): RoomType[] {
    return this.load().roomTypes;
  }
  addRoomType(roomType: RoomType): void {
    const data = this.load();
    roomType['id'] = this.generateId(data.roomTypes);
    data.roomTypes.push(roomType);
    this.save(data);
  }
  updateRoomType(id: number, updates: Partial<RoomType>): void {
    const data = this.load();
    const idx = data.roomTypes.findIndex((r) => r['id'] === id);
    if (idx !== -1) {
      data.roomTypes[idx] = { ...data.roomTypes[idx], ...updates };
      this.save(data);
    }
  }
  deleteRoomType(id: number): void {
    const data = this.load();
    data.roomTypes = data.roomTypes.filter((r) => r['id'] !== id);
    this.save(data);
  }

  // Rooms
  getRooms(): Room[] {
    return this.load().rooms;
  }
  addRoom(room: Room): void {
    const data = this.load();
    room['id'] = this.generateId(data.rooms);
    data.rooms.push(room);
    this.save(data);
  }
  updateRoom(id: number, updates: Partial<Room>): void {
    const data = this.load();
    const idx = data.rooms.findIndex((r) => r['id'] === id);
    if (idx !== -1) {
      data.rooms[idx] = { ...data.rooms[idx], ...updates };
      this.save(data);
    }
  }
  deleteRoom(id: number): void {
    const data = this.load();
    data.rooms = data.rooms.filter((r) => r['id'] !== id);
    this.save(data);
  }

  // Rate Plans
  getRatePlans(): RatePlan[] {
    return this.load().ratePlans;
  }
  addRatePlan(ratePlan: RatePlan): void {
    const data = this.load();
    ratePlan['id'] = this.generateId(data.ratePlans);
    data.ratePlans.push(ratePlan);
    this.save(data);
  }
  updateRatePlan(id: number, updates: Partial<RatePlan>): void {
    const data = this.load();
    const idx = data.ratePlans.findIndex((rp) => rp['id'] === id);
    if (idx !== -1) {
      data.ratePlans[idx] = { ...data.ratePlans[idx], ...updates };
      this.save(data);
    }
  }
  deleteRatePlan(id: number): void {
    const data = this.load();
    data.ratePlans = data.ratePlans.filter((rp) => rp['id'] !== id);
    this.save(data);
  }

  // Taxes
  getTaxes(): Tax[] {
    return this.load().taxes;
  }
  addTax(tax: Tax): void {
    const data = this.load();
    tax['id'] = this.generateId(data.taxes);
    data.taxes.push(tax);
    this.save(data);
  }
  updateTax(id: number, updates: Partial<Tax>): void {
    const data = this.load();
    const idx = data.taxes.findIndex((t) => t['id'] === id);
    if (idx !== -1) {
      data.taxes[idx] = { ...data.taxes[idx], ...updates };
      this.save(data);
    }
  }
  deleteTax(id: number): void {
    const data = this.load();
    data.taxes = data.taxes.filter((t) => t['id'] !== id);
    this.save(data);
  }

  // Policies (combined getter for counts/UI)
  getPolicies(): (CancellationPolicy | BookingPolicy)[] {
    const data = this.load();
    return [...data.policies.cancellation, ...data.policies.booking];
  }
  setPolicies(policies: {
    cancellation: CancellationPolicy[];
    booking: BookingPolicy[];
  }): void {
    const data = this.load();
    data.policies = policies;
    this.save(data);
  }

  // Amenities
  getAmenities(): Amenity[] {
    return this.load().amenities;
  }
  addAmenity(amenity: Amenity): void {
    const data = this.load();
    amenity['id'] = this.generateId(data.amenities);
    data.amenities.push(amenity);
    this.save(data);
  }
  updateAmenity(id: number, updates: Partial<Amenity>): void {
    const data = this.load();
    const idx = data.amenities.findIndex((a) => a['id'] === id);
    if (idx !== -1) {
      data.amenities[idx] = { ...data.amenities[idx], ...updates };
      this.save(data);
    }
  }
  deleteAmenity(id: number): void {
    const data = this.load();
    data.amenities = data.amenities.filter((a) => a['id'] !== id);
    this.save(data);
  }

  // Users
  getUsers(): User[] {
    return this.load().users;
  }
  addUser(user: User): void {
    const data = this.load();
    user['id'] = this.generateId(data.users);
    data.users.push(user);
    this.save(data);
  }
  updateUser(id: number, updates: Partial<User>): void {
    const data = this.load();
    const idx = data.users.findIndex((u) => u['id'] === id);
    if (idx !== -1) {
      data.users[idx] = { ...data.users[idx], ...updates };
      this.save(data);
    }
  }
  deleteUser(id: number): void {
    const data = this.load();
    data.users = data.users.filter((u) => u['id'] !== id);
    this.save(data);
  }

  // Import/Export/Clear
  exportData(): string {
    return JSON.stringify(this.load(), null, 2);
  }
  importData(jsonData: string): boolean {
    try {
      const parsedObj = JSON.parse(jsonData) as unknown;
      const validation = this.validator.validateHotelData(parsedObj);
      if (!validation.success) {
        console.error('Validation errors:', validation.errors);
        return false;
      }
      const parsed = this.validate(parsedObj);
      this.save(parsed);
      return true;
    } catch (e) {
      console.error('Error importing data:', e);
      return false;
    }
  }

  validateCurrent(): ValidationResult {
    const snapshot = this.load();
    return this.validator.validateHotelData(snapshot);
  }

  // Debug method to check localStorage state
  debugStorage(): void {
    const ls = this.browserStorage;
    if (!ls) {
      console.error('❌ localStorage not available');
      return;
    }

    console.log('🔍 LocalStorage Debug Info:');
    console.log('Storage key:', this.STORAGE_KEY);
    console.log('Raw data exists:', ls.getItem(this.STORAGE_KEY) !== null);

    const rawData = ls.getItem(this.STORAGE_KEY);
    if (rawData) {
      console.log('Raw data size:', new Blob([rawData]).size, 'bytes');
      try {
        const parsed = JSON.parse(rawData);
        console.log('Parsed data structure:', {
          hotel: parsed.hotel ? 'Present' : 'Missing',
          roomTypes: Array.isArray(parsed.roomTypes)
            ? parsed.roomTypes.length
            : 'Invalid',
          rooms: Array.isArray(parsed.rooms) ? parsed.rooms.length : 'Invalid',
          amenities: Array.isArray(parsed.amenities)
            ? parsed.amenities.length
            : 'Invalid',
          users: Array.isArray(parsed.users) ? parsed.users.length : 'Invalid',
          lastModified: parsed.lastModified || 'Missing',
        });
      } catch (e) {
        console.error('❌ Failed to parse stored data:', e);
      }
    } else {
      console.log('❌ No data found in localStorage');
    }

    // List all localStorage keys for reference
    console.log(
      'All localStorage keys:',
      Array.from({ length: ls.length }, (_, i) => ls.key(i)),
    );
  }

  // Utils
  private generateId<T extends { id?: string | number }>(items: T[]): number {
    return (
      items.length > 0 ? Math.max(...items.map((i) => Number(i.id) || 0)) : 0
    ) + 1;
  }
}
