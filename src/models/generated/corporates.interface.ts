/**
 * Corporates Model Interfaces
 * Database table: corporates
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorporates {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno: string;  // Required
  vatno: string;  // Required
  logo?: string;  // Default: ''
  businessname: string;  // Required
  billingcompname: string;  // Required
  iscreditallowed?: number;  // Default: 0
  creditlimit?: number;
  availablecreditlimt?: number;
  discount?: number;
  discounttype?: string;
  lastloggedin: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
  discountable?: number;  // Default: 0
  paymentterms?: number;  // Default: 0
  publishroomrate?: number;  // Default: 0
  groupcode?: string;
  rfctype?: number;
  rfccode?: string;
  marketsegmentid?: number;  // Default: 0
  issezelizible?: number;  // Default: 0
  sezvalidity?: Date;
  iscontracted?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateCorporates {
  compid?: number;
  hotelid?: number;
  regnumber?: string;
  codeno: string;
  vatno: string;
  logo?: string;
  businessname: string;
  billingcompname: string;
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
}

// Update interface - for entity updates (all fields optional)
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
}
