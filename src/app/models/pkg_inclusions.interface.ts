/**
 * PkgInclusions Model
 * Database table: pkginclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgInclusions {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgInclusions {
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
}
export interface IUpdatePkgInclusions {
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
}