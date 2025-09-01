/**
 * PkgBulkDiscountArchive Model
 * Database table: pkgbulkdiscountarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgBulkDiscountArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  sessionid?: string;
}

export interface ICreatePkgBulkDiscountArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdby?: number;
  status?: string;
  sessionid?: string;
}
export interface IUpdatePkgBulkDiscountArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  reftype?: string;
  refid?: number;
  startdate?: Date;
  enddate?: Date;
  roomnightfrom?: number;
  roomnightto?: number;
  discount?: number;
  disctype?: string;
  createdby?: number;
  status?: string;
  sessionid?: string;
}