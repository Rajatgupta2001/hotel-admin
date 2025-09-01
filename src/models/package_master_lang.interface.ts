/**
 * PackageMasterLang Model
 * Database table: packagemasterlang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
  modifiedby?: number;  // User ID reference
}

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