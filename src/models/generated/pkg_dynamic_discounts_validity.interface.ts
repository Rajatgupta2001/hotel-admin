/**
 * PkgDynamicDiscountsValidity Model Interfaces
 * Database table: pkgDynamicDiscountsValidity
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgDynamicDiscountsValidity {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid: number;  // Required
  refid: number;  // Required
  reftype?: string;
  validfrom?: Date;
  validto?: Date;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePkgDynamicDiscountsValidity {
  hotelid: number;
  pkgid: number;
  refid: number;
  reftype?: string;
  validfrom?: Date;
  validto?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
