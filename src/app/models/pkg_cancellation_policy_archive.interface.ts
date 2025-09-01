/**
 * PkgCancellationPolicyArchive Model
 * Database table: pkgcancellationpolicyarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgCancellationPolicyArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  sessionid?: string;
  rmtypeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgCancellationPolicyArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  sessionid?: string;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePkgCancellationPolicyArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  sessionid?: string;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}