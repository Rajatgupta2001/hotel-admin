/**
 * TimeZones Model Interfaces
 * Database table: timeZones
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITimeZones {
  id?: number;  // Primary key - auto-generated
  zonename: string;  // Required
  zonecode: string;  // Required
  countryid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateTimeZones {
  zonename: string;
  zonecode: string;
  countryid: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTimeZones {
  zonename?: string;
  zonecode?: string;
  countryid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
