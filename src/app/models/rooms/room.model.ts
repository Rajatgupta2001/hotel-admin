import { EntityId } from '../core/entity-id.model';
import { BaseEntity } from '../core/base.model';

/**
 * Individual Room configuration
 */
export interface Room extends BaseEntity {
  hotelId: EntityId;
  roomTypeId: EntityId;

  // Basic Information
  roomNumber: string; // Room identifier (can be alphanumeric)
  roomName?: string; // Optional friendly name

  // Location
  floorId?: EntityId;
  blockId?: EntityId;
  buildingId?: EntityId;
  location: RoomLocation;

  // Current State
  currentStatus: RoomStatus;
  maintenanceStatus: MaintenanceStatus;
  housekeepingStatus: HousekeepingStatus;

  // Entity status (active/inactive/deleted) - required by BaseEntity
  status: 'active' | 'inactive' | 'deleted';

  // Features (overrides from room type)
  featureOverrides?: Partial<{
    maxOccupancy: number;
    bedConfiguration: {
      singleBeds: number;
      doubleBeds: number;
      queenBeds: number;
      kingBeds: number;
      sofaBeds: number;
      extraBedAllowed: boolean;
      maxExtraBeds: number;
    };
    amenityIds: EntityId[];
    isAccessible: boolean;
    hasBalcony: boolean;
    hasBathtub: boolean;
    viewType:
      | 'sea'
      | 'city'
      | 'garden'
      | 'mountain'
      | 'pool'
      | 'courtyard'
      | 'none';
  }>;

  // Operational Settings
  allowOverbooking: boolean;
  isOutOfOrder: boolean;
  isVirtual: boolean; // For room type upgrades/downgrades

  // Assignments
  assignedTo?: {
    housekeeperId?: EntityId;
    maintenanceId?: EntityId;
  };

  // Notes & Comments
  notes?: string;
  internalNotes?: string;

  // Rates (if different from room type)
  rateOverrides?: {
    ratePlanId: EntityId;
    rate: number;
    currency: string;
    validFrom: Date;
    validTo: Date;
  }[];
}

export interface RoomLocation {
  floor?: number | string;
  wing?: string;
  block?: string;
  building?: string;
  coordinates?: {
    x: number;
    y: number;
  };
}

export interface RoomStatus {
  status:
    | 'available'
    | 'occupied'
    | 'reserved'
    | 'blocked'
    | 'ooo'
    | 'maintenance';
  checkInTime?: Date;
  checkOutTime?: Date;
  guestCount?: number;
  reservationId?: EntityId;
  blockedReason?: string;
  blockedUntil?: Date;
}

export interface MaintenanceStatus {
  status: 'none' | 'scheduled' | 'in-progress' | 'completed' | 'overdue';
  lastMaintenance?: Date;
  nextMaintenance?: Date;
  maintenanceType?: 'routine' | 'repair' | 'deep-clean' | 'inspection';
  assignedTo?: EntityId;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  issues: MaintenanceIssue[];
}

export interface HousekeepingStatus {
  status: 'clean' | 'dirty' | 'inspected' | 'maintenance' | 'ooo';
  lastCleaned?: Date;
  cleanedBy?: EntityId;
  inspectedBy?: EntityId;
  inspectedAt?: Date;
  cleaningType?: 'checkout' | 'maintenance' | 'deep' | 'stay-over';
  priority: 'low' | 'medium' | 'high';
  estimatedTime?: number; // minutes
}

export interface MaintenanceIssue {
  id: EntityId;
  type: 'plumbing' | 'electrical' | 'hvac' | 'furniture' | 'fixtures' | 'other';
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  reportedBy: EntityId;
  reportedAt: Date;
  status: 'open' | 'in-progress' | 'resolved' | 'deferred';
  assignedTo?: EntityId;
  estimatedCost?: number;
  actualCost?: number;
  resolvedAt?: Date;
  notes?: string;
}
