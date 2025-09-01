/**
 * PosCloseShift Model Interfaces
 * Database table: posCloseShift
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosCloseShift {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  closedate?: Date;
  pospointid?: number;
  itemid?: number;
  shiftid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosCloseShift {
  hotelid?: number;
  closedate?: Date;
  pospointid?: number;
  itemid?: number;
  shiftid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosCloseShift {
  hotelid?: number;
  closedate?: Date;
  pospointid?: number;
  itemid?: number;
  shiftid?: number;
  createdby?: number;
  modifiedby?: number;
}
