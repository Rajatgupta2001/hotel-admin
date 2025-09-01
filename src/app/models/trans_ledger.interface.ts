/**
 * TransLedger Model
 * Database table: transledger
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITransLedger {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
  isbookingfolio?: number;
  isroomrentfolio?: number;
  isotherchargefolio?: number;
  transguestid?: number;
  isrefundedtr?: number;
  issync?: number;
}

export interface ICreateTransLedger {
  hotelid?: number;
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
export interface IUpdateTransLedger {
  hotelid?: number;
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