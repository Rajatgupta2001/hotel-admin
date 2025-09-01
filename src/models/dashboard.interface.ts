/**
 * Dashboard Model
 * Database table: dashboard
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDashboard {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  userid: number;  // Required
  title?: string;
  sortorder?: number;  // Default: 0 (backend)
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
  status?: string;
}

export interface ICreateDashboard {
  hotelid: number;
  userid: number;
  title?: string;
  sortorder?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdateDashboard {
  hotelid?: number;
  userid?: number;
  title?: string;
  sortorder?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}