/**
 * PkgImagesArchive Model
 * Database table: pkgimagesarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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

export interface ICreatePkgImagesArchive {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
}
export interface IUpdatePkgImagesArchive {
  hotelid?: number;
  pkgid?: number;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
}