/**
 * TimeZones Model
 * Database table: timezones
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITimeZones {
  id?: number;  // Primary key - auto-generated
  zonename?: string;
  zonecode?: string;
  countryid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateTimeZones {
  zonename?: string;
  zonecode?: string;
  countryid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateTimeZones {
  zonename?: string;
  zonecode?: string;
  countryid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}