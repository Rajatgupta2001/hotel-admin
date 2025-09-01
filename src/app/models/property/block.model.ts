import { EntityId } from '../core/entity-id.model';
import { BaseEntityWithCode } from '../core/base.model';

/**
 * Block configuration for property layout
 */
export interface Block extends BaseEntityWithCode {
  hotelId: EntityId;

  // Basic Information
  shortName?: string; // For display in property plans
  buildingId?: EntityId; // For multi-building properties

  // Location & Access
  location: {
    isConnected: boolean; // Whether physically connected to other blocks
    connectingBlockIds?: EntityId[]; // Blocks this one connects to
    distanceToMainBuilding?: number; // In meters
    walkingTimeToMainBuilding?: number; // In minutes
  };

  // Operational Information
  isActive: boolean;
  isWheelchairAccessible: boolean;
  isRestricted: boolean; // For limited-access blocks
  restrictionDetails?: string;

  // Block Capacity
  totalFloors: number;
  totalRooms: number;
  maxRooms: number;

  // Housekeeping & Maintenance
  defaultHousekeepingTeamId?: EntityId;
  maintenanceNotes?: string;

  // Visualization & Mapping
  mapUrl?: string; // URL to block plan image
  coordinates?: {
    latitude: number;
    longitude: number;
  };

  // Additional Information
  notes?: string;
  amenityIds?: EntityId[]; // Block-specific amenities
}
