/**
 * PkgInclusionsArchive Model Interfaces
 * Database table: pkgInclusionsArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgInclusionsArchive {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid: number;  // Required
  validityid?: number;
  inclid: number;  // Required
  inclgrpid?: number;  // Default: 0
  pkgitemid: number;  // Required
  price?: number;
  discount?: number;
  discounttype: string;  // Required
  totalamount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreatePkgInclusionsArchive {
  hotelid: number;
  pkgid: number;
  validityid?: number;
  inclid: number;
  inclgrpid?: number;
  pkgitemid: number;
  price?: number;
  discount?: number;
  discounttype: string;
  totalamount?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  sessionid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgInclusionsArchive {
  hotelid?: number;
  pkgid?: number;
  validityid?: number;
  inclid?: number;
  inclgrpid?: number;
  pkgitemid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  totalamount?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
