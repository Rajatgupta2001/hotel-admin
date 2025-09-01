/**
 * RoomDerivation Model Interfaces
 * Database table: roomDerivation
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomDerivation {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  roomid?: number;
  drmtypeid: number;  // Required
  droomid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateRoomDerivation {
  hotelid: number;
  roomid?: number;
  drmtypeid: number;
  droomid: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomDerivation {
  hotelid?: number;
  roomid?: number;
  drmtypeid?: number;
  droomid?: number;
  createdby?: number;
}
