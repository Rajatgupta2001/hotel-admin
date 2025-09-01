/**
 * PackagesHistory Model
 * Database table: packageshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPackagesHistory {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: string;
  minstay?: number;
  isprorated?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  autoupdateprice?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  parentpkgid?: number;
  refid?: number;
}

export interface ICreatePackagesHistory {
  hotelid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: string;
  minstay?: number;
  isprorated?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  autoupdateprice?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  parentpkgid?: number;
  refid?: number;
}
export interface IUpdatePackagesHistory {
  hotelid?: number;
  pkgname?: string;
  pkgshortname?: string;
  description?: string;
  minstay?: number;
  isprorated?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  autoupdateprice?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  parentpkgid?: number;
  refid?: number;
}