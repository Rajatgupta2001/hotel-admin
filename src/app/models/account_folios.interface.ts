/**
 * AccountFolios Model
 * Database table: accountfolios
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountFolios {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  refid?: number;
  posid?: number;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  grpshow?: string;
  rsvshow?: string;
  amountpaid?: number;
  totalprice?: number;
  discamount?: number;
  priceaftdisc?: number;
  tax?: number;
  tds?: number;
  nettotal?: number;
  description?: string;
  type?: string;
  folioof?: string;
  subtype?: string;
  issync?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  duedate?: Date;
  nadate?: Date;
  foliodate?: Date;
}

export interface ICreateAccountFolios {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  refid?: number;
  posid?: number;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  grpshow?: string;
  rsvshow?: string;
  amountpaid?: number;
  totalprice?: number;
  discamount?: number;
  priceaftdisc?: number;
  tax?: number;
  tds?: number;
  nettotal?: number;
  description?: string;
  type?: string;
  folioof?: string;
  subtype?: string;
  issync?: number;
  duedate?: Date;
  nadate?: Date;
  foliodate?: Date;
}
export interface IUpdateAccountFolios {
  hotelid?: number;
  groupid?: number;
  rsvid?: number;
  refid?: number;
  posid?: number;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  grpshow?: string;
  rsvshow?: string;
  amountpaid?: number;
  totalprice?: number;
  discamount?: number;
  priceaftdisc?: number;
  tax?: number;
  tds?: number;
  nettotal?: number;
  description?: string;
  type?: string;
  folioof?: string;
  subtype?: string;
  issync?: number;
  duedate?: Date;
  nadate?: Date;
  foliodate?: Date;
}