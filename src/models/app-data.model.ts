/**
 * Main Application Data Model for Local Storage
 */

import { Hotel } from './hotel.model';
import { RoomType } from './room-type.model';
import { Room } from './room.model';
import { Tax } from './tax.model';
import { Amenity } from './amenity.model';
import { User } from './user.model';
import { RatePlan } from './rate-plan.model';
import { CancellationPolicy, BookingPolicy } from './policy.model';
import { OutboxData, DEFAULT_OUTBOX_DATA } from './outbox.model';

export interface AppData {
  hotel: Hotel | null;
  roomTypes: RoomType[];
  rooms: Room[];
  ratePlans: RatePlan[];
  taxes: Tax[];
  policies: {
    cancellation: CancellationPolicy[];
    booking: BookingPolicy[];
  };
  amenities: Amenity[];
  users: User[];
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
