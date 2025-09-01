/**
 * PkgNonValidDates Model Interfaces
 * Database table: pkgNonValidDates
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgNonValidDates {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePkgNonValidDates {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgNonValidDates {
  hotelid?: number;
  pkgid?: number;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
}
