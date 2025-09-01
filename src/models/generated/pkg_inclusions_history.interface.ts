/**
 * PkgInclusionsHistory Model Interfaces
 * Database table: pkgInclusionsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgInclusionsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid: number;  // Required
  inclid: number;  // Required
  inclgrpid?: number;
  pkgitemid: number;  // Required
  price?: number;
  discount?: number;
  discounttype: string;  // Required
  totalamount?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  refid: number;  // Required
  servmdate?: Date;
}

// Create interface - for new entity creation
export interface ICreatePkgInclusionsHistory {
  hotelid: number;
  pkgid: number;
  inclid: number;
  inclgrpid?: number;
  pkgitemid: number;
  price?: number;
  discount?: number;
  discounttype: string;
  totalamount?: number;
  modifiedby?: number;
  status: string;
  refid: number;
  servmdate?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgInclusionsHistory {
  hotelid?: number;
  pkgid?: number;
  inclid?: number;
  inclgrpid?: number;
  pkgitemid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  totalamount?: number;
  modifiedby?: number;
  status?: string;
  refid?: number;
  servmdate?: Date;
}
