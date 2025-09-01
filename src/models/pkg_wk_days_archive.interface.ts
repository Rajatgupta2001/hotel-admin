/**
 * PkgWkDaysArchive Model
 * Database table: pkgwkdaysarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgWkDaysArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  dayno?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

export interface ICreatePkgWkDaysArchive {
  hotelid?: number;
  pkgid?: number;
  dayno?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
export interface IUpdatePkgWkDaysArchive {
  hotelid?: number;
  pkgid?: number;
  dayno?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}