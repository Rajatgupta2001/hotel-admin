/**
 * PkgDynamicDiscountsValidity Model
 * Database table: pkgdynamicdiscountsvalidity
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgDynamicDiscountsValidity {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  refid?: number;
  reftype?: string;
  validfrom?: Date;
  validto?: Date;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgDynamicDiscountsValidity {
  hotelid?: number;
  pkgid?: number;
  refid?: number;
  reftype?: string;
  validfrom?: Date;
  validto?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePkgDynamicDiscountsValidity {
  hotelid?: number;
  pkgid?: number;
  refid?: number;
  reftype?: string;
  validfrom?: Date;
  validto?: Date;
  createdby?: number;
  modifiedby?: number;
}