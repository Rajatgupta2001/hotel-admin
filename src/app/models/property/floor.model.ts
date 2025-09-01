import { EntityId } from '../core/entity-id.model';
import { BaseEntityWithCode } from '../core/base.model';

/**
 * Floor configuration for property layout
 */
export interface Floor extends BaseEntityWithCode {
  hotelId: EntityId;

  // Basic Information
  floorNumber: string | number; // Can be numeric or named (e.g., "Mezzanine", "Lobby")
  shortName?: string; // For display in floor plans

  // Physical Layout
  buildingId?: EntityId; // For multi-building properties
  blockId?: EntityId; // For multi-block properties
  level: number; // Elevation level (0 = ground floor, -1 = basement, etc.)

  // Operational Information
  isActive: boolean;
  hasElevatorAccess: boolean;
  hasStairAccess: boolean;
  isWheelchairAccessible: boolean;
  isServiceFloor: boolean; // For staff-only floors

  // Floor Capacity
  totalRooms: number;
  maxRooms: number;

  // Housekeeping & Maintenance
  defaultHousekeepingTeamId?: EntityId;
  maintenanceNotes?: string;

  // Visualization & Mapping
  mapUrl?: string; // URL to floor plan image
  mapCoordinates?: FloorMapCoordinates;

  // Additional Information
  notes?: string;
  amenityIds?: EntityId[]; // Floor-specific amenities
}

export interface FloorMapCoordinates {
  width: number;
  height: number;
  coordinates: {
    x: number;
    y: number;
  };
  orientation: 'portrait' | 'landscape';
  scale: number;
}
