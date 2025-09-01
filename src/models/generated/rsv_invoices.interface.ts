/**
 * RsvInvoices Model Interfaces
 * Database table: rsvInvoices
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvInvoices {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  folionumber?: string;
  pkgid?: number;
  weekdaytype: string;  // Required
  groupid?: number;
  inclid?: number;
  posid?: number;
  productid?: number;
  title?: string;
  transtype?: string;
  guestid?: number;  // Default: 0
  amount?: number;
  discount?: number;  // Default: text("'0.000000'"
  discounttype?: string;  // Default: text("'FV'"
  discamount?: number;  // Default: text("'0.000000'"
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

// Create interface - for new entity creation
export interface ICreateRsvInvoices {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  folionumber?: string;
  pkgid?: number;
  weekdaytype: string;
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

// Update interface - for entity updates (all fields optional)
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
