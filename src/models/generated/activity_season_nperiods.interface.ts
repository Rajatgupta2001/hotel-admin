/**
 * ActivitySeasonNperiods Model Interfaces
 * Database table: activitySeasonNPeriods
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IActivitySeasonNperiods {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  type?: string;  // Default: text("'SP'"
  startdate?: Date;  // Default: text("'1945-01-01 00:00:00'"
  enddate?: Date;  // Default: text("'9999-12-31 00:00:00'"
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateActivitySeasonNperiods {
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateActivitySeasonNperiods {
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
