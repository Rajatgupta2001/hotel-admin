/**
 * Corporates Model
 * Database table: corporates
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IContactInfoMaster } from './contact_info_master.interface';
import { IAddressMaster } from './address_master.interface';
import { IFilesMaster } from './files_master.interface';

export interface ICorporates {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno?: string;
  logo?: string;
  businessname?: string;
  billingcompname?: string;
  iscreditallowed?: number;  // Default: 0 (backend)
  creditlimit?: number;
  availablecreditlimt?: number;
  discount?: number;
  discounttype?: string;
  lastloggedin: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  discountable?: number;  // Default: 0 (backend)
  paymentterms?: number;  // Default: 0 (backend)
  publishroomrate?: number;  // Default: 0 (backend)
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;  // Default: 0 (backend)
  issezelizible?: number;  // Default: 0 (backend)
  sezvalidity?: Date;
  iscontracted?: number;  // Default: 0 (backend)
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}

export interface ICreateCorporates {
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno?: string;
  logo?: string;
  businessname?: string;
  billingcompname?: string;
  iscreditallowed?: number;
  creditlimit?: number;
  availablecreditlimt?: number;
  discount?: number;
  discounttype?: string;
  lastloggedin: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  discountable?: number;
  paymentterms?: number;
  publishroomrate?: number;
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;
  issezelizible?: number;
  sezvalidity?: Date;
  iscontracted?: number;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}
export interface IUpdateCorporates {
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno?: string;
  logo?: string;
  businessname?: string;
  billingcompname?: string;
  iscreditallowed?: number;
  creditlimit?: number;
  availablecreditlimt?: number;
  discount?: number;
  discounttype?: string;
  lastloggedin?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  discountable?: number;
  paymentterms?: number;
  publishroomrate?: number;
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;
  issezelizible?: number;
  sezvalidity?: Date;
  iscontracted?: number;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}