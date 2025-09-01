/**
 * PkgStatusManager Model
 * Database table: pkgstatusmanager
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgStatusManager {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePkgStatusManager {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}
export interface IUpdatePkgStatusManager {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}