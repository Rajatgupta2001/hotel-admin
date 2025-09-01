/**
 * MinimumStayPeriods Model
 * Database table: minimumstayperiods
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMinimumStayPeriods {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  closedon?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateMinimumStayPeriods {
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  closedon?: number;
  modifiedby?: number;
}
export interface IUpdateMinimumStayPeriods {
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  closedon?: number;
  modifiedby?: number;
}