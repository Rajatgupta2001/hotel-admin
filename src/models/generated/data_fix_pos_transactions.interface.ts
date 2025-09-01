/**
 * DataFixPosTransactions Model Interfaces
 * Database table: dataFix_posTransactions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDataFixPosTransactions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  counterid?: number;
  invoiceid?: string;
  sessionid?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  pospointid?: string;
  catid?: number;
  proid?: number;
  proname?: string;
  procode?: string;
  unit?: number;
  price?: number;
  perunitstring?: string;
  tax?: number;
  totalprice?: number;
  totalpriceafttax?: number;
  fee?: number;  // Default: text("'0.000000'"
  discount?: number;
  actualdiscount?: number;
  reason?: Date;
  discounttype?: string;
  priceaftdiscount?: number;
  pkgdiscount?: number;
  priceaftalldiscount?: number;
  refundstatus?: string;
  refundunit?: number;
  tranfertoroom?: number;  // Default: 0
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
  guestid?: number;  // Default: 0
  persontype?: string;
  shiftid?: number;  // Default: 0
  noofshifts?: number;  // Default: text("'1'"
  activitydate?: Date;
  runningstatus?: string;  // Default: text("'PENDING'"
  starttime?: string;
  endtime?: string;
  endshiftid?: number;
  groupid?: string;  // Default: 0
  errortransid?: string;
  originalxml?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  externalid?: string;
  kotid?: number;
  value4?: number;  // Default: 0
  value5?: number;  // Default: 0
  roff?: string;  // Default: text("''"
}

// Create interface - for new entity creation
export interface ICreateDataFixPosTransactions {
  hotelid?: number;
  counterid?: number;
  invoiceid?: string;
  sessionid?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  pospointid?: string;
  catid?: number;
  proid?: number;
  proname?: string;
  procode?: string;
  unit?: number;
  price?: number;
  perunitstring?: string;
  tax?: number;
  totalprice?: number;
  totalpriceafttax?: number;
  fee?: number;
  discount?: number;
  actualdiscount?: number;
  reason?: Date;
  discounttype?: string;
  priceaftdiscount?: number;
  pkgdiscount?: number;
  priceaftalldiscount?: number;
  refundstatus?: string;
  refundunit?: number;
  tranfertoroom?: number;
  srvcdate?: Date;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  orderstatus?: string;
  cancelonnadate?: Date;
  cancelon?: Date;
  cancelby?: number;
  guestid?: number;
  persontype?: string;
  shiftid?: number;
  noofshifts?: number;
  activitydate?: Date;
  runningstatus?: string;
  starttime?: string;
  endtime?: string;
  endshiftid?: number;
  groupid?: string;
  errortransid?: string;
  originalxml?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  externalid?: string;
  kotid?: number;
  value4?: number;
  value5?: number;
  roff?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDataFixPosTransactions {
  hotelid?: number;
  counterid?: number;
  invoiceid?: string;
  sessionid?: string;
  foliono?: string;
  parentfoliono?: string;
  customfoliono?: string;
  customparentfoliono?: string;
  pospointid?: string;
  catid?: number;
  proid?: number;
  proname?: string;
  procode?: string;
  unit?: number;
  price?: number;
  perunitstring?: string;
  tax?: number;
  totalprice?: number;
  totalpriceafttax?: number;
  fee?: number;
  discount?: number;
  actualdiscount?: number;
  reason?: Date;
  discounttype?: string;
  priceaftdiscount?: number;
  pkgdiscount?: number;
  priceaftalldiscount?: number;
  refundstatus?: string;
  refundunit?: number;
  tranfertoroom?: number;
  srvcdate?: Date;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  orderstatus?: string;
  cancelonnadate?: Date;
  cancelon?: Date;
  cancelby?: number;
  guestid?: number;
  persontype?: string;
  shiftid?: number;
  noofshifts?: number;
  activitydate?: Date;
  runningstatus?: string;
  starttime?: string;
  endtime?: string;
  endshiftid?: number;
  groupid?: string;
  errortransid?: string;
  originalxml?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  externalid?: string;
  kotid?: number;
  value4?: number;
  value5?: number;
  roff?: string;
}
