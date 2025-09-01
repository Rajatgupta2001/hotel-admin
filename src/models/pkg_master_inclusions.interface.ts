/**
 * PkgMasterInclusions Model
 * Database table: pkgmasterinclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgMasterInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  inclid?: number;
  inclgrpid?: number;
  pkgitemid?: number;
  price?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePkgMasterInclusions {
  hotelid?: number;
  pkgid?: number;
  inclid?: number;
  inclgrpid?: number;
  pkgitemid?: number;
  price?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdatePkgMasterInclusions {
  hotelid?: number;
  pkgid?: number;
  inclid?: number;
  inclgrpid?: number;
  pkgitemid?: number;
  price?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}