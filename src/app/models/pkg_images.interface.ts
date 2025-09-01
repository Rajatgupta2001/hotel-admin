/**
 * PkgImages Model
 * Database table: pkgimages
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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

export interface ICreatePkgImages {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePkgImages {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
}