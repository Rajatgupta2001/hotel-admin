import type { IContactInfoMaster } from './contact_info_master.interface';
import type { IAddressMaster } from './address_master.interface';
import type { IFilesMaster } from './files_master.interface';
/**
 * Agents Model
 * Database table: agents
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgents {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno?: string;
  logo?: string;
  businessname?: string;
  billingcompname?: string;
  commission?: number;
  commissiontype?: string;
  description?: string;
  retrospective?: number;  // Default: 0 (backend)
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  paymentterms?: number;  // Default: 0 (backend)
  creditlimit?: number;
  vatrefid?: number;
  tds?: number;
  tdswithtax?: number;  // Default: 0 (backend)
  publishroomrate?: number;  // Default: 0 (backend)
  iatacode?: string;
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;  // Default: 0 (backend)
  iscreditallowed?: number;  // Default: 0 (backend)
  defaultcustomtagval?: number;
  iselizdiscount?: number;  // Default: 0 (backend)
  issezelizible?: number;  // Default: 0 (backend)
  sezvalidity?: Date;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}

export interface ICreateAgents {
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno?: string;
  logo?: string;
  businessname?: string;
  billingcompname?: string;
  commission?: number;
  commissiontype?: string;
  description?: string;
  retrospective?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  paymentterms?: number;
  creditlimit?: number;
  vatrefid?: number;
  tds?: number;
  tdswithtax?: number;
  publishroomrate?: number;
  iatacode?: string;
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;
  iscreditallowed?: number;
  defaultcustomtagval?: number;
  iselizdiscount?: number;
  issezelizible?: number;
  sezvalidity?: Date;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}
export interface IUpdateAgents {
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno?: string;
  logo?: string;
  businessname?: string;
  billingcompname?: string;
  commission?: number;
  commissiontype?: string;
  description?: string;
  retrospective?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  paymentterms?: number;
  creditlimit?: number;
  vatrefid?: number;
  tds?: number;
  tdswithtax?: number;
  publishroomrate?: number;
  iatacode?: string;
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;
  iscreditallowed?: number;
  defaultcustomtagval?: number;
  iselizdiscount?: number;
  issezelizible?: number;
  sezvalidity?: Date;
  contactInfo?: IContactInfoMaster;
  addresses?: IAddressMaster;
  files?: IFilesMaster;
}