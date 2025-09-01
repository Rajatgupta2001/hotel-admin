/**
 * PkgBookingPolicyArchive Model
 * Database table: pkgbookingpolicyarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgBookingPolicyArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  bookpolicyid?: number;
  sessionid?: string;
  rmtypeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgBookingPolicyArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  bookpolicyid?: number;
  sessionid?: string;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePkgBookingPolicyArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  bookpolicyid?: number;
  sessionid?: string;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}