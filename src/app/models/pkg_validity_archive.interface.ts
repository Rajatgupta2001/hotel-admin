/**
 * PkgValidityArchive Model
 * Database table: pkgvalidityarchive
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgValidityArchive {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  validfrom?: Date;
  validto?: Date;
  seasonattributeid?: number;
  seasonnspid?: number;
  commissionable?: number;
  agentcom?: number;
  comtype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
  oldvalidityid?: number;
  status?: string;
  forlifetime?: number;
  isperiod?: number;
  retrospective?: number;
  withtax?: number;
}

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