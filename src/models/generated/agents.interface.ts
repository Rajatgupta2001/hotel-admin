/**
 * Agents Model Interfaces
 * Database table: agents
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgents {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno: string;  // Required
  logo: string;  // Required
  businessname: string;  // Required
  billingcompname: string;  // Required
  commission?: number;
  commissiontype?: string;
  description?: string;
  retrospective?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  paymentterms?: number;  // Default: 0
  creditlimit?: number;
  vatrefid?: number;
  tds?: number;
  tdswithtax?: number;  // Default: 0
  publishroomrate?: number;  // Default: 0
  iatacode?: string;
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;  // Default: 0
  iscreditallowed?: number;  // Default: 0
  defaultcustomtagval?: number;
  iselizdiscount?: number;  // Default: 0
  issezelizible?: number;  // Default: 0
  sezvalidity?: Date;
}

// Create interface - for new entity creation
export interface ICreateAgents {
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno?: string;
  vatno: string;
  logo: string;
  businessname: string;
  billingcompname: string;
  commission?: number;
  commissiontype?: string;
  description?: string;
  retrospective?: number;
  createdby?: number;
  status: string;
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
}

// Update interface - for entity updates (all fields optional)
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
}
