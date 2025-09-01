/**
 * PkgImagesArchive Model Interfaces
 * Database table: pkgImagesArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgImagesArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreatePkgImagesArchive {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgImagesArchive {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
}
