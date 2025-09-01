import type { ICorporates } from './corporates.interface';
import type { IGuestsMaster } from './guests_master.interface';
import type { IAgents } from './agents.interface';
/**
 * ContactInfoMaster Model
 * Database table: contactinfomaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IContactInfoMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  compname?: string;
  designation?: string;
  phoneno?: string;
  phextention?: string;
  mobileno?: string;
  faxno?: string;
  email?: string;
  webresvpass?: string;
  gender?: string;
  dob?: Date;
  website?: string;
  contacttype?: string;
  status?: string;
  tablename?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}

export interface ICreateContactInfoMaster {
  hotelid?: number;
  refid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  compname?: string;
  designation?: string;
  phoneno?: string;
  phextention?: string;
  mobileno?: string;
  faxno?: string;
  email?: string;
  webresvpass?: string;
  gender?: string;
  dob?: Date;
  website?: string;
  contacttype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}
export interface IUpdateContactInfoMaster {
  hotelid?: number;
  refid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  compname?: string;
  designation?: string;
  phoneno?: string;
  phextention?: string;
  mobileno?: string;
  faxno?: string;
  email?: string;
  webresvpass?: string;
  gender?: string;
  dob?: Date;
  website?: string;
  contacttype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}