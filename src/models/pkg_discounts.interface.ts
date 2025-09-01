/**
 * PkgDiscounts Model
 * Database table: pkgdiscounts
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  pospointid?: number;
  discountper?: number;
  discounttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  refcode?: number;
}

export interface ICreatePkgDiscounts {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  pospointid?: number;
  discountper?: number;
  discounttype?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  refcode?: number;
}
export interface IUpdatePkgDiscounts {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  pospointid?: number;
  discountper?: number;
  discounttype?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  refcode?: number;
}