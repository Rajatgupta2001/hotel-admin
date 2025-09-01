/**
 * GdsCloseRoomAllotmentWithoutRate Model Interfaces
 * Database table: gdsCloseRoomAllotmentWithoutRate
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsCloseRoomAllotmentWithoutRate {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  closedate?: Date;
  roomtypeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGdsCloseRoomAllotmentWithoutRate {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  closedate?: Date;
  roomtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsCloseRoomAllotmentWithoutRate {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  closedate?: Date;
  roomtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}
