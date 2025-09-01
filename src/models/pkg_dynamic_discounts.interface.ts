/**
 * PkgDynamicDiscounts Model
 * Database table: pkgdynamicdiscounts
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgDynamicDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  refid?: number;
  reftype?: string;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgDynamicDiscounts {
  hotelid?: number;
  pkgid?: number;
  refid?: number;
  reftype?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePkgDynamicDiscounts {
  hotelid?: number;
  pkgid?: number;
  refid?: number;
  reftype?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}