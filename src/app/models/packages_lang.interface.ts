/**
 * PackagesLang Model
 * Database table: packageslang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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