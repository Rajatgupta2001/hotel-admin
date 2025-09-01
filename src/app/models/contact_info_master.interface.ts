/**
 * ContactInfoMaster Model
 * Database table: contactinfomaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IGuestsMaster } from './guests_master.interface';
import { IAgents } from './agents.interface';
import { ICorporates } from './corporates.interface';

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