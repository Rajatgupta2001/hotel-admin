/**
 * PkgValidityArchive Model Interfaces
 * Database table: pkgValidityArchive
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgValidityArchive {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validfrom?: Date;  // Default: text("'0000-00-00'"
  validto?: Date;  // Default: text("'0000-00-00'"
  seasonattributeid?: number;  // Default: 0
  seasonnspid?: number;
  commissionable?: number;  // Default: 0
  agentcom?: number;  // Default: text("'0.000000'"
  comtype?: string;  // Default: text("'FV'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
  oldvalidityid?: number;  // Default: 0
  status?: string;  // Default: 'A'
  forlifetime?: number;  // Default: 0
  isperiod?: number;  // Default: 0
  retrospective?: number;  // Default: 0
  withtax?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePkgValidityArchive {
  hotelid?: number;
  pkgid?: number;
  validfrom?: Date;
  validto?: Date;
  seasonattributeid?: number;
  seasonnspid?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
  oldvalidityid?: number;
  status?: string;
  forlifetime?: number;
  isperiod?: number;
  retrospective?: number;
  withtax?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgValidityArchive {
  hotelid?: number;
  pkgid?: number;
  validfrom?: Date;
  validto?: Date;
  seasonattributeid?: number;
  seasonnspid?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
  oldvalidityid?: number;
  status?: string;
  forlifetime?: number;
  isperiod?: number;
  retrospective?: number;
  withtax?: number;
}
