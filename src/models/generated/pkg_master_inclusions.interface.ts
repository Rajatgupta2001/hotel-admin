/**
 * PkgMasterInclusions Model Interfaces
 * Database table: pkgMasterInclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgMasterInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid: number;  // Required
  inclid: number;  // Required
  inclgrpid?: number;  // Default: 0
  pkgitemid: number;  // Required
  price?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePkgMasterInclusions {
  hotelid: number;
  pkgid: number;
  inclid: number;
  inclgrpid?: number;
  pkgitemid: number;
  price?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgMasterInclusions {
  hotelid?: number;
  pkgid?: number;
  inclid?: number;
  inclgrpid?: number;
  pkgitemid?: number;
  price?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
