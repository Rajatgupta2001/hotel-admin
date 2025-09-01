/**
 * HotelBudget Model Interfaces
 * Database table: hotelBudget
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelBudget {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  reftype?: string;  // Default: text("'POS'"
  dtmonth: number;  // Required
  dtyear: number;  // Required
  effectivedate?: Date;
  budget?: number;  // Default: text("'0.000000'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelBudget {
  hotelid: number;
  refid: number;
  reftype?: string;
  dtmonth: number;
  dtyear: number;
  effectivedate?: Date;
  budget?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelBudget {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  dtmonth?: number;
  dtyear?: number;
  effectivedate?: Date;
  budget?: number;
  createdby?: number;
  modifiedby?: number;
}
