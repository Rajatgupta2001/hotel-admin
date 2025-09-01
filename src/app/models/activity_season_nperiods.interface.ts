/**
 * ActivitySeasonNperiods Model
 * Database table: activityseasonnperiods
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IActivitySeasonNperiods {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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