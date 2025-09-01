/**
 * PkgDiscountsArchive Model
 * Database table: pkgdiscountsarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgDiscountsArchive {
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
  sessionid?: string;
}

export interface ICreatePkgDiscountsArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  pospointid?: number;
  discountper?: number;
  discounttype?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
export interface IUpdatePkgDiscountsArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  pospointid?: number;
  discountper?: number;
  discounttype?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}