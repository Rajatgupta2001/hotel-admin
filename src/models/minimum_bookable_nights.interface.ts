/**
 * MinimumBookableNights Model
 * Database table: minimumbookablenights
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMinimumBookableNights {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  startdate?: Date;
  enddate?: Date;
  noofnights?: number;
  scope?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateMinimumBookableNights {
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