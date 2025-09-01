/**
 * GuestsMaster Model
 * Database table: guestsmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IContactInfoMaster } from './contact_info_master.interface';
import { IAddressMaster } from './address_master.interface';
import { IFilesMaster } from './files_master.interface';

export interface IGuestsMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  regnumber?: string;
  memno?: string;
  vipno?: number;
  nationality?: number;
  businesssrcid?: number;
  secrutyid?: number;
  identitytype?: number;
  identityno?: string;
  designation?: string;
  spousesalutation?: string;
  spousefname?: string;
  spouselname?: string;
  spousedob?: Date;
  anniversary?: Date;
  languageid?: string;
  isblacklisted?: number;
  preferences?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  rfctype?: number;
  rfccode?: string;
  gid?: string;
  val1?: string;
  donotshareinfo?: number;
  guestcorpid?: number;
  signatureurl?: string;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}

export interface ICreateGuestsMaster {
  hotelid?: number;
  compid?: number;
  regnumber?: string;
  memno?: string;
  vipno?: number;
  nationality?: number;
  businesssrcid?: number;
  secrutyid?: number;
  identitytype?: number;
  identityno?: string;
  designation?: string;
  spousesalutation?: string;
  spousefname?: string;
  spouselname?: string;
  spousedob?: Date;
  anniversary?: Date;
  languageid?: string;
  isblacklisted?: number;
  preferences?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  rfctype?: number;
  rfccode?: string;
  gid?: string;
  val1?: string;
  donotshareinfo?: number;
  guestcorpid?: number;
  signatureurl?: string;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}
export interface IUpdateGuestsMaster {
  hotelid?: number;
  compid?: number;
  regnumber?: string;
  memno?: string;
  vipno?: number;
  nationality?: number;
  businesssrcid?: number;
  secrutyid?: number;
  identitytype?: number;
  identityno?: string;
  designation?: string;
  spousesalutation?: string;
  spousefname?: string;
  spouselname?: string;
  spousedob?: Date;
  anniversary?: Date;
  languageid?: string;
  isblacklisted?: number;
  preferences?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  rfctype?: number;
  rfccode?: string;
  gid?: string;
  val1?: string;
  donotshareinfo?: number;
  guestcorpid?: number;
  signatureurl?: string;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}