/**
 * ActivitySeasonAttributes Model
 * Database table: activityseasonattributes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IActivitySeasonAttributes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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