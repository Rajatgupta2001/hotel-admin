/**
 * PackageMasterLang Model Interfaces
 * Database table: packageMasterLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPackageMasterLang {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePackageMasterLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePackageMasterLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}
