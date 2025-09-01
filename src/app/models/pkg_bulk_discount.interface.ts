/**
 * PkgBulkDiscount Model
 * Database table: pkgbulkdiscount
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgBulkDiscount {
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
  refcode?: number;
  comtype?: string;
}

export interface ICreatePkgBulkDiscount {
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
  refcode?: number;
  comtype?: string;
}
export interface IUpdatePkgBulkDiscount {
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
  refcode?: number;
  comtype?: string;
}