/**
 * AddressMaster Model
 * Database table: addressmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IGuestsMaster } from './guests_master.interface';
import { IAgents } from './agents.interface';
import { ICorporates } from './corporates.interface';

export interface IAddressMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  address1?: string;
  address2?: string;
  city?: string;
  stateid?: number;
  otherstate?: string;
  zipcode?: string;
  countryid?: number;
  phoneno?: string;
  mobileno?: string;
  faxno?: string;
  addresstype?: string;
  status?: string;
  tablename?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}

export interface ICreateAddressMaster {
  hotelid?: number;
  refid?: number;
  address1?: string;
  address2?: string;
  city?: string;
  stateid?: number;
  otherstate?: string;
  zipcode?: string;
  countryid?: number;
  phoneno?: string;
  mobileno?: string;
  faxno?: string;
  addresstype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}
export interface IUpdateAddressMaster {
  hotelid?: number;
  refid?: number;
  address1?: string;
  address2?: string;
  city?: string;
  stateid?: number;
  otherstate?: string;
  zipcode?: string;
  countryid?: number;
  phoneno?: string;
  mobileno?: string;
  faxno?: string;
  addresstype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
  guest?: IGuestsMaster;
  agent?: IAgents;
  corporate?: ICorporates;
}