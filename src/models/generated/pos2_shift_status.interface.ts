/**
 * Pos2ShiftStatus Model Interfaces
 * Database table: pos2ShiftStatus
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2ShiftStatus {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  shiftid?: number;  // Default: 0
  starttime?: Date;
  endtime?: Date;
  startbyuserid?: number;  // Default: 0
  endbyuserid?: number;  // Default: 0
  counterid?: number;
  posid: number;  // Required
  shiftclosetimer?: Date;
}

// Create interface - for new entity creation
export interface ICreatePos2ShiftStatus {
  hotelid: number;
  shiftid?: number;
  starttime?: Date;
  endtime?: Date;
  startbyuserid?: number;
  endbyuserid?: number;
  counterid?: number;
  posid: number;
  shiftclosetimer?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2ShiftStatus {
  hotelid?: number;
  shiftid?: number;
  starttime?: Date;
  endtime?: Date;
  startbyuserid?: number;
  endbyuserid?: number;
  counterid?: number;
  posid?: number;
  shiftclosetimer?: Date;
}
