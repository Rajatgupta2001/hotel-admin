/**
 * PosInvoice Model
 * Database table: posinvoice
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosInvoice {
  id?: string;  // Primary key - auto-generated
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
  foliodistype?: string;
  foliodisreason?: string;
  iscomplementary?: number;
  totalamount?: number;
  remarks?: string;
  rsvid?: Date;
  groupid?: string;
  invtoroomid?: string;
  roomserviceid?: Date;
  srvcdate?: Date;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
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

export interface ICreatePosInvoice {
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
  foliodistype?: string;
  foliodisreason?: string;
  iscomplementary?: number;
  totalamount?: number;
  remarks?: string;
  rsvid?: Date;
  groupid?: string;
  invtoroomid?: string;
  roomserviceid?: Date;
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
export interface IUpdatePosInvoice {
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
  foliodistype?: string;
  foliodisreason?: string;
  iscomplementary?: number;
  totalamount?: number;
  remarks?: string;
  rsvid?: Date;
  groupid?: string;
  invtoroomid?: string;
  roomserviceid?: Date;
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