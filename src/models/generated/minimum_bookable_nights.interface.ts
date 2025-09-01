/**
 * MinimumBookableNights Model Interfaces
 * Database table: minimumBookableNights
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMinimumBookableNights {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  startdate: Date;  // Required
  enddate: Date;  // Required
  noofnights?: number;
  scope?: string;  // Default: text("'WEB'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateMinimumBookableNights {
  hotelid: number;
  title: string;
  startdate: Date;
  enddate: Date;
  noofnights?: number;
  scope?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMinimumBookableNights {
  hotelid?: number;
  title?: string;
  startdate?: Date;
  enddate?: Date;
  noofnights?: number;
  scope?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
