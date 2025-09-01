/**
 * PkgImages Model Interfaces
 * Database table: pkgImages
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgImages {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePkgImages {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgImages {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
}
