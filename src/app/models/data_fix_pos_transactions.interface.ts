/**
 * DataFixPosTransactions Model
 * Database table: datafixpostransactions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDataFixPosTransactions {
  id?: Date;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
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
  groupid?: Date;
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
  groupid?: Date;
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
  groupid?: Date;
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