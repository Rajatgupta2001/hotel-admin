/**
 * GdsRoomAllotmentWithoutRate Model Interfaces
 * Database table: gdsRoomAllotmentWithoutRate
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsRoomAllotmentWithoutRate {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;  // Default: 0
  prmallot?: number;  // Default: 0
  refid?: number;
  reftype?: string;
  isoverbook?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGdsRoomAllotmentWithoutRate {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  prmallot?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsRoomAllotmentWithoutRate {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  prmallot?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}
