/**
 * PkgWkDaysArchive Model Interfaces
 * Database table: pkgWkDaysArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgWkDaysArchive {
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
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreatePkgWkDaysArchive {
  hotelid?: number;
  pkgid: number;
  dayno: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgWkDaysArchive {
  hotelid?: number;
  pkgid?: number;
  dayno?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
