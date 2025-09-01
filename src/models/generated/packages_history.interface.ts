/**
 * PackagesHistory Model Interfaces
 * Database table: packagesHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPackagesHistory {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgname: string;  // Required
  pkgshortname: string;  // Required
  description: string;  // Required
  minstay: number;  // Required
  isprorated?: number;  // Default: 0
  commissionable?: number;  // Default: text("'1'"
  agentcom?: number;
  comtype: string;  // Required
  autoupdateprice?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  parentpkgid?: number;  // Default: 0
  refid?: number;
}

// Create interface - for new entity creation
export interface ICreatePackagesHistory {
  hotelid: number;
  pkgname: string;
  pkgshortname: string;
  description: string;
  minstay: number;
  isprorated?: number;
  commissionable?: number;
  agentcom?: number;
  comtype: string;
  autoupdateprice?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  parentpkgid?: number;
  refid?: number;
}

// Update interface - for entity updates (all fields optional)
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
