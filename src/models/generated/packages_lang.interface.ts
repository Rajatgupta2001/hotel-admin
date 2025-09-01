/**
 * PackagesLang Model Interfaces
 * Database table: packagesLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPackagesLang {
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
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePackagesLang {
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
export interface IUpdatePackagesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}
