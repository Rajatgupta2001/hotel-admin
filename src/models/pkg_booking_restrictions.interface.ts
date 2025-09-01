/**
 * PkgBookingRestrictions Model
 * Database table: pkgbookingrestrictions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgBookingRestrictions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  roomtypeid?: number;
  type?: string;
  value?: string;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgBookingRestrictions {
  hotelid?: number;
  pkgid?: number;
  roomtypeid?: number;
  type?: string;
  value?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdatePkgBookingRestrictions {
  hotelid?: number;
  pkgid?: number;
  roomtypeid?: number;
  type?: string;
  value?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}