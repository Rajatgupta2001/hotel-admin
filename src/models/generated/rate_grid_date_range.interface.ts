/**
 * RateGridDateRange Model Interfaces
 * Database table: rateGridDateRange
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRateGridDateRange {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  rmtypeid?: string;
  ratetype?: string;
  rateid?: number;
  type: string;  // Required
  validityid?: number;
  validfrom: Date;  // Required
  validto: Date;  // Required
  weekdayno: number;  // Required
  refcode: number;  // Required
  status?: string;  // Default: 'A'
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRateGridDateRange {
  rmtypeid?: string;
  ratetype?: string;
  rateid?: number;
  type: string;
  validityid?: number;
  validfrom: Date;
  validto: Date;
  weekdayno: number;
  refcode: number;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRateGridDateRange {
  rmtypeid?: string;
  ratetype?: string;
  rateid?: number;
  type?: string;
  validityid?: number;
  validfrom?: Date;
  validto?: Date;
  weekdayno?: number;
  refcode?: number;
  status?: string;
  createdby?: number;
}
