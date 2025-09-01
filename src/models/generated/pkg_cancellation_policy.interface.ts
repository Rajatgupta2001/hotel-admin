/**
 * PkgCancellationPolicy Model Interfaces
 * Database table: pkgCancellationPolicy
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgCancellationPolicy {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  isseason?: number;  // Default: 0
  canpolicyid?: number;
  rmtypeid?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
