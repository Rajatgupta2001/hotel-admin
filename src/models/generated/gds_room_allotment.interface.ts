/**
 * GdsRoomAllotment Model Interfaces
 * Database table: gdsRoomAllotment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsRoomAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  rateid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;  // Default: 0
  bkgrecieved?: number;  // Default: 0
  releasedays?: number;
  iscontracted?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGdsRoomAllotment {
  hotelid?: number;
  roomtypeid?: number;
  rateid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  bkgrecieved?: number;
  releasedays?: number;
  iscontracted?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsRoomAllotment {
  hotelid?: number;
  roomtypeid?: number;
  rateid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  bkgrecieved?: number;
  releasedays?: number;
  iscontracted?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}
