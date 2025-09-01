/**
 * PkgStatusManager Model Interfaces
 * Database table: pkgStatusManager
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgStatusManager {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePkgStatusManager {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgStatusManager {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}
