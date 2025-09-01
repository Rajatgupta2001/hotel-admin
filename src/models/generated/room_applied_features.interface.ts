/**
 * RoomAppliedFeatures Model Interfaces
 * Database table: roomAppliedFeatures
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomAppliedFeatures {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  roomid: number;  // Required
  featureid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateRoomAppliedFeatures {
  hotelid: number;
  roomid: number;
  featureid: number;
  createdby?: number;
  status: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomAppliedFeatures {
  hotelid?: number;
  roomid?: number;
  featureid?: number;
  createdby?: number;
  status?: string;
}
