/**
 * PkgCancellationPolicy Model
 * Database table: pkgcancellationpolicy
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgCancellationPolicy {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgCancellationPolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePkgCancellationPolicy {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;
  canpolicyid?: number;
  rmtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}