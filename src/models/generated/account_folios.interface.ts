/**
 * AccountFolios Model Interfaces
 * Database table: accountFolios
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountFolios {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  groupid?: number;  // Default: 0
  rsvid?: number;  // Default: 0
  refid?: number;  // Default: 0
  posid?: number;  // Default: 0
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  grpshow?: string;
  rsvshow?: string;
  amountpaid?: number;  // Default: text("'0.000000'"
  totalprice?: number;  // Default: text("'0.000000'"
  discamount?: number;  // Default: text("'0.000000'"
  priceaftdisc?: number;  // Default: text("'0.000000'"
  tax?: number;  // Default: text("'0.000000'"
  tds?: number;  // Default: text("'0.000000'"
  nettotal?: number;  // Default: text("'0.000000'"
  description?: string;
  type?: string;
  folioof?: string;
  subtype?: string;
  issync?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  duedate?: Date;
  nadate?: Date;
  foliodate?: Date;
}

// Create interface - for new entity creation
export interface ICreateAccountFolios {
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

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountFolios {
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
