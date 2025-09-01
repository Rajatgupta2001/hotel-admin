/**
 * PosInvoice Model Interfaces
 * Database table: posInvoice
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosInvoice {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  counterid?: number;
  sessionid?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  pospointid?: number;
  guestid?: string;
  ownertype?: number;  // Default: text("'2'"
  cusfname?: string;
  cuslname?: string;
  subtotal?: number;
  totaltax?: number;
  totalamountafttax?: number;
  fee?: number;  // Default: text("'0.000000'"
  totaldiscount?: number;
  totalpriceaftdiscount?: number;
  pkgdiscounttype?: string;
  pkgdiscount?: number;  // Default: text("'0.000000'"
  pkgdiscountori?: number;  // Default: text("'0.000000'"
  foliodisfv?: number;  // Default: text("'0.000000'"
  foliodispv?: number;  // Default: text("'0.000000'"
  foliodistype?: string;
  foliodisreason?: string;
  iscomplementary?: number;  // Default: 0
  totalamount?: number;
  remarks?: string;
  rsvid?: string;  // Default: 0
  groupid?: string;
  invtoroomid?: string;
  roomserviceid?: string;  // Default: 0
  srvcdate?: Date;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  orderstatus?: string;  // Default: text("'ACTIVE'"
  cancelonnadate?: Date;
  cancelon?: Date;
  cancelby?: number;  // Default: 0
  isfromfrontdesk?: number;  // Default: 0
  adjustment?: number;  // Default: text("'0.000000'"
  cancelationcharge?: number;  // Default: text("'0.000000'"
  cancelationreason?: string;
  exttype?: string;
  extstatus?: string;  // Default: 'A'
  extid?: string;
  extdisctype?: string;
  extdiscamt?: number;  // Default: text("'0.000000'"
  extdiscnature?: number;  // Default: text("'0.000000'"
  errorinvoiceid?: string;
  isclosed?: number;  // Default: 0
  rfctype?: number;
  rfccode?: string;
  countryid?: number;
  covers?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreatePosInvoice {
  counterid?: number;
  sessionid?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  pospointid?: number;
  guestid?: string;
  ownertype?: number;
  cusfname?: string;
  cuslname?: string;
  subtotal?: number;
  totaltax?: number;
  totalamountafttax?: number;
  fee?: number;
  totaldiscount?: number;
  totalpriceaftdiscount?: number;
  pkgdiscounttype?: string;
  pkgdiscount?: number;
  pkgdiscountori?: number;
  foliodisfv?: number;
  foliodispv?: number;
  foliodistype?: string;
  foliodisreason?: string;
  iscomplementary?: number;
  totalamount?: number;
  remarks?: string;
  rsvid?: string;
  groupid?: string;
  invtoroomid?: string;
  roomserviceid?: string;
  srvcdate?: Date;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  orderstatus?: string;
  cancelonnadate?: Date;
  cancelon?: Date;
  cancelby?: number;
  isfromfrontdesk?: number;
  adjustment?: number;
  cancelationcharge?: number;
  cancelationreason?: string;
  exttype?: string;
  extstatus?: string;
  extid?: string;
  extdisctype?: string;
  extdiscamt?: number;
  extdiscnature?: number;
  errorinvoiceid?: string;
  isclosed?: number;
  rfctype?: number;
  rfccode?: string;
  countryid?: number;
  covers?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosInvoice {
  counterid?: number;
  sessionid?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  pospointid?: number;
  guestid?: string;
  ownertype?: number;
  cusfname?: string;
  cuslname?: string;
  subtotal?: number;
  totaltax?: number;
  totalamountafttax?: number;
  fee?: number;
  totaldiscount?: number;
  totalpriceaftdiscount?: number;
  pkgdiscounttype?: string;
  pkgdiscount?: number;
  pkgdiscountori?: number;
  foliodisfv?: number;
  foliodispv?: number;
  foliodistype?: string;
  foliodisreason?: string;
  iscomplementary?: number;
  totalamount?: number;
  remarks?: string;
  rsvid?: string;
  groupid?: string;
  invtoroomid?: string;
  roomserviceid?: string;
  srvcdate?: Date;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  orderstatus?: string;
  cancelonnadate?: Date;
  cancelon?: Date;
  cancelby?: number;
  isfromfrontdesk?: number;
  adjustment?: number;
  cancelationcharge?: number;
  cancelationreason?: string;
  exttype?: string;
  extstatus?: string;
  extid?: string;
  extdisctype?: string;
  extdiscamt?: number;
  extdiscnature?: number;
  errorinvoiceid?: string;
  isclosed?: number;
  rfctype?: number;
  rfccode?: string;
  countryid?: number;
  covers?: number;
}
