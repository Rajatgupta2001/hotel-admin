/**
 * PkgValidity Model Interfaces
 * Database table: pkgValidity
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgValidity {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  pkgid?: string;
  validfrom?: Date;  // Default: text("'0000-00-00'"
  validto?: Date;  // Default: text("'0000-00-00'"
  seasonattributeid?: number;  // Default: 0
  seasonnspid?: number;  // Default: 0
  commissionable?: number;  // Default: 0
  agentcom?: number;  // Default: text("'0.000000'"
  comtype?: string;  // Default: text("'FV'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
  forlifetime?: number;  // Default: 0
  extraadult?: number;  // Default: text("'0.000000'"
  extrachild?: number;  // Default: text("'0.000000'"
  isperiod?: number;  // Default: 0
  retrospective?: number;  // Default: 0
  withtax?: number;  // Default: 0
  prntpkgvalidityid?: string;
}

// Create interface - for new entity creation
export interface ICreatePkgValidity {
  hotelid?: string;
  pkgid?: string;
  validfrom?: Date;
  validto?: Date;
  seasonattributeid?: number;
  seasonnspid?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  forlifetime?: number;
  extraadult?: number;
  extrachild?: number;
  isperiod?: number;
  retrospective?: number;
  withtax?: number;
  prntpkgvalidityid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgValidity {
  hotelid?: string;
  pkgid?: string;
  validfrom?: Date;
  validto?: Date;
  seasonattributeid?: number;
  seasonnspid?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  forlifetime?: number;
  extraadult?: number;
  extrachild?: number;
  isperiod?: number;
  retrospective?: number;
  withtax?: number;
  prntpkgvalidityid?: string;
}
