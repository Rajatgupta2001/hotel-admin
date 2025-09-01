/**
 * PkgWkDays Model Interfaces
 * Database table: pkgWkDays
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgWkDays {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid: number;  // Required
  dayno: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePkgWkDays {
  hotelid?: number;
  pkgid: number;
  dayno: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgWkDays {
  hotelid?: number;
  pkgid?: number;
  dayno?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
