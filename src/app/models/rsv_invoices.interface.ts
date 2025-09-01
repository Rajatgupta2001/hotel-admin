/**
 * RsvInvoices Model
 * Database table: rsvinvoices
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvInvoices {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  folionumber?: string;
  pkgid?: number;
  weekdaytype?: string;
  groupid?: number;
  inclid?: number;
  posid?: number;
  productid?: number;
  title?: string;
  transtype?: string;
  guestid?: number;
  amount?: number;
  discount?: number;
  discounttype?: string;
  discamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  effectivedate?: Date;
  share1?: number;
  share2?: number;
  share3?: number;
  share4?: number;
  share5?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRsvInvoices {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  folionumber?: string;
  pkgid?: number;
  weekdaytype?: string;
  groupid?: number;
  inclid?: number;
  posid?: number;
  productid?: number;
  title?: string;
  transtype?: string;
  guestid?: number;
  amount?: number;
  discount?: number;
  discounttype?: string;
  discamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  effectivedate?: Date;
  share1?: number;
  share2?: number;
  share3?: number;
  share4?: number;
  share5?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateRsvInvoices {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  folionumber?: string;
  pkgid?: number;
  weekdaytype?: string;
  groupid?: number;
  inclid?: number;
  posid?: number;
  productid?: number;
  title?: string;
  transtype?: string;
  guestid?: number;
  amount?: number;
  discount?: number;
  discounttype?: string;
  discamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  effectivedate?: Date;
  share1?: number;
  share2?: number;
  share3?: number;
  share4?: number;
  share5?: number;
  createdby?: number;
  modifiedby?: number;
}