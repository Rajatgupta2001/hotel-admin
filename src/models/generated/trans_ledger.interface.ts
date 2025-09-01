/**
 * TransLedger Model Interfaces
 * Database table: transLedger
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITransLedger {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  transid?: string;
  effectivedate?: Date;
  title?: string;
  custdescription?: string;
  reference?: string;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  discountamount?: number;
  priceaftdisc?: number;
  transtype?: string;
  tax?: number;
  nettotal?: number;
  fee?: number;  // Default: text("'0.000000'"
  groupid?: number;
  rsvid?: number;
  rsvguestid?: number;
  refid?: number;
  reftype?: string;
  foliono?: string;
  customfoliono?: string;
  ratio?: number;
  islocktrans?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
  isbookingfolio?: number;  // Default: 0
  isroomrentfolio?: number;  // Default: 0
  isotherchargefolio?: number;  // Default: 0
  transguestid?: number;  // Default: 0
  isrefundedtr?: number;  // Default: 0
  issync?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateTransLedger {
  transid?: string;
  effectivedate?: Date;
  title?: string;
  custdescription?: string;
  reference?: string;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  discountamount?: number;
  priceaftdisc?: number;
  transtype?: string;
  tax?: number;
  nettotal?: number;
  fee?: number;
  groupid?: number;
  rsvid?: number;
  rsvguestid?: number;
  refid?: number;
  reftype?: string;
  foliono?: string;
  customfoliono?: string;
  ratio?: number;
  islocktrans?: number;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
  isbookingfolio?: number;
  isroomrentfolio?: number;
  isotherchargefolio?: number;
  transguestid?: number;
  isrefundedtr?: number;
  issync?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTransLedger {
  transid?: string;
  effectivedate?: Date;
  title?: string;
  custdescription?: string;
  reference?: string;
  totalprice?: number;
  discount?: number;
  discounttype?: string;
  discountamount?: number;
  priceaftdisc?: number;
  transtype?: string;
  tax?: number;
  nettotal?: number;
  fee?: number;
  groupid?: number;
  rsvid?: number;
  rsvguestid?: number;
  refid?: number;
  reftype?: string;
  foliono?: string;
  customfoliono?: string;
  ratio?: number;
  islocktrans?: number;
  createdby?: number;
  modifiedby?: number;
  sessionid?: string;
  isbookingfolio?: number;
  isroomrentfolio?: number;
  isotherchargefolio?: number;
  transguestid?: number;
  isrefundedtr?: number;
  issync?: number;
}
