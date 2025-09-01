/**
 * PkgBookingPolicyArchive Model Interfaces
 * Database table: pkgBookingPolicyArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgBookingPolicyArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;  // Default: 0
  bookpolicyid?: number;
  sessionid?: string;
  rmtypeid?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
