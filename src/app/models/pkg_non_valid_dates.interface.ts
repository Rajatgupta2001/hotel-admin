/**
 * PkgNonValidDates Model
 * Database table: pkgnonvaliddates
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgNonValidDates {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreatePkgNonValidDates {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}
export interface IUpdatePkgNonValidDates {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}