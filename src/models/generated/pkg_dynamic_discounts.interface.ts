/**
 * PkgDynamicDiscounts Model Interfaces
 * Database table: pkgDynamicDiscounts
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgDynamicDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid: number;  // Required
  refid: number;  // Required
  reftype?: string;
  status?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePkgDynamicDiscounts {
  hotelid: number;
  pkgid: number;
  refid: number;
  reftype?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgDynamicDiscounts {
  hotelid?: number;
  pkgid?: number;
  refid?: number;
  reftype?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
