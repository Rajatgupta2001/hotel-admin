/**
 * DataFixPosInvoice Model Interfaces
 * Database table: dataFix_posInvoice
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDataFixPosInvoice {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
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
  foliodisType?: string;
  foliodisreason?: string;
  iscomplementary?: number;  // Default: 0
  totalamount?: number;
  remarks?: string;
  rsvid?: number;  // Default: 0
  groupid?: number;
  invtoroomid?: number;
  roomserviceid?: number;  // Default: 0
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
  extid?: string;
  errorinvoiceid?: number;
  isclosed?: number;  // Default: 0
  rfctype?: number;
  rfccode?: string;
  countryid?: number;
  covers?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateDataFixPosInvoice {
  hotelid?: number;
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
  foliodisType?: string;
  foliodisreason?: string;
  iscomplementary?: number;
  totalamount?: number;
  remarks?: string;
  rsvid?: number;
  groupid?: number;
  invtoroomid?: number;
  roomserviceid?: number;
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
  extid?: string;
  errorinvoiceid?: number;
  isclosed?: number;
  rfctype?: number;
  rfccode?: string;
  countryid?: number;
  covers?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDataFixPosInvoice {
  hotelid?: number;
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
  foliodisType?: string;
  foliodisreason?: string;
  iscomplementary?: number;
  totalamount?: number;
  remarks?: string;
  rsvid?: number;
  groupid?: number;
  invtoroomid?: number;
  roomserviceid?: number;
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
  extid?: string;
  errorinvoiceid?: number;
  isclosed?: number;
  rfctype?: number;
  rfccode?: string;
  countryid?: number;
  covers?: number;
}
