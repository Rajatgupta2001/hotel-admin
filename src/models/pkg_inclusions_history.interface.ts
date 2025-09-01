/**
 * PkgInclusionsHistory Model
 * Database table: pkginclusionshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgInclusionsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  inclid?: number;
  inclgrpid?: number;
  pkgitemid?: number;
  price?: number;
  discount?: number;
  discounttype?: string;
  totalamount?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  refid?: number;
  servmdate?: Date;
}

export interface ICreatePkgInclusionsHistory {
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