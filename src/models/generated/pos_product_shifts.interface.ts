/**
 * PosProductShifts Model Interfaces
 * Database table: posProductShifts
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosProductShifts {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  productid: number;  // Required
  shiftid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  orderby?: number;
}

// Create interface - for new entity creation
export interface ICreatePosProductShifts {
  hotelid: number;
  productid: number;
  shiftid: number;
  createdby?: number;
  orderby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosProductShifts {
  hotelid?: number;
  productid?: number;
  shiftid?: number;
  createdby?: number;
  orderby?: number;
}
