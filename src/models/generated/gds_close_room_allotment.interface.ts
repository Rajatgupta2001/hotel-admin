/**
 * GdsCloseRoomAllotment Model Interfaces
 * Database table: gdsCloseRoomAllotment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsCloseRoomAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  closedate?: Date;
  roomtypeid?: number;
  rateid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGdsCloseRoomAllotment {
  hotelid?: number;
  closedate?: Date;
  roomtypeid?: number;
  rateid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsCloseRoomAllotment {
  hotelid?: number;
  closedate?: Date;
  roomtypeid?: number;
  rateid?: number;
  createdby?: number;
  modifiedby?: number;
}
