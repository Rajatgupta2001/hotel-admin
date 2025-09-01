/**
 * PkgInclusionsArchive Model
 * Database table: pkginclusionsarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgInclusionsArchive {
  id?: string;  // Primary key - auto-generated
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
  sessionid?: string;
}

export interface ICreatePkgInclusionsArchive {
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