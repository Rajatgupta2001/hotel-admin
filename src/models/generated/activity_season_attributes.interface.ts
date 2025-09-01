/**
 * ActivitySeasonAttributes Model Interfaces
 * Database table: activitySeasonAttributes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IActivitySeasonAttributes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateActivitySeasonAttributes {
  hotelid?: number;
  title?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateActivitySeasonAttributes {
  hotelid?: number;
  title?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
