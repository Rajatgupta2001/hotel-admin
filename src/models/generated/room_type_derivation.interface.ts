/**
 * RoomTypeDerivation Model Interfaces
 * Database table: roomTypeDerivation
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomTypeDerivation {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rmtypeid: number;  // Required
  drmtypeid?: number;
  rmtypecount: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateRoomTypeDerivation {
  hotelid: number;
  rmtypeid: number;
  drmtypeid?: number;
  rmtypecount: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomTypeDerivation {
  hotelid?: number;
  rmtypeid?: number;
  drmtypeid?: number;
  rmtypecount?: number;
  createdby?: number;
}
