/**
 * DataFixPosInvoice Model
 * Database table: datafixposinvoice
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  extid?: string;
  errorinvoiceid?: number;
  isclosed?: number;
  rfctype?: number;
  rfccode?: string;
  countryid?: number;
  covers?: number;
}

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