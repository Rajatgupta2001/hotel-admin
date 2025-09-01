/**
 * PkgDiscountsArchive Model Interfaces
 * Database table: pkgDiscountsArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgDiscountsArchive {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid: number;  // Required
  validityid?: number;
  pospointid: number;  // Required
  discountper?: number;
  discounttype?: string;  // Default: text("'PV'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreatePkgDiscountsArchive {
  hotelid?: number;
  pkgid: number;
  validityid?: number;
  pospointid: number;
  discountper?: number;
  discounttype?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
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
