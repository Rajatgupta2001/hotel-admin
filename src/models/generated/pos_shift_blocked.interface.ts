/**
 * PosShiftBlocked Model Interfaces
 * Database table: posShiftBlocked
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosShiftBlocked {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  itemid?: number;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  blocked?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePosShiftBlocked {
  hotelid: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  itemid?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  blocked?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosShiftBlocked {
  hotelid?: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  itemid?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  blocked?: number;
}
