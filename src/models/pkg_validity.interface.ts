/**
 * PkgValidity Model
 * Database table: pkgvalidity
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgValidity {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  pkgid?: string;
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
  status?: string;
  forlifetime?: number;
  extraadult?: number;
  extrachild?: number;
  isperiod?: number;
  retrospective?: number;
  withtax?: number;
  prntpkgvalidityid?: string;
}

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