/**
 * PackageMaster Model Interfaces
 * Database table: packageMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPackageMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgname: string;  // Required
  minstay?: number;  // Default: text("'1'"
  pkgshortname: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePackageMaster {
  hotelid: number;
  pkgname: string;
  minstay?: number;
  pkgshortname: string;
  description: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePackageMaster {
  hotelid?: number;
  pkgname?: string;
  minstay?: number;
  pkgshortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
