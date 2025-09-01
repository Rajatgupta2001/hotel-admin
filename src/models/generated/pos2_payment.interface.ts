/**
 * Pos2Payment Model Interfaces
 * Database table: pos2Payment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2Payment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  posid: number;  // Required
  orderid: number;  // Required
  amount?: number;  // Default: text("'0.000000'"
  pmnttypeid: number;  // Required
  roomid?: number;
  rsvid?: number;
  groupid?: number;
  ownerid?: number;
  receiptno: string;  // Required
  description: string;  // Required
  transectionno?: string;
  gatewaytransdata?: string;
  amountothercurr?: number;  // Default: text("'0.000000'"
  isconverted?: number;  // Default: 0
  exchangerate?: number;  // Default: text("'0.000000'"
  excurency?: string;
  paymentdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: 0
  countersessionid?: number;
  isrefunded?: number;  // Default: 0
  paidby?: number;  // Default: 0
  isadjustment?: number;  // Default: 0
  paynowortrnsroom?: string;
  pospaymentmasterid?: number;
  ccchequeno?: string;
  moved?: number;
  issync?: number;
  sessionid?: string;
  bankid?: number;
  isshow?: number;  // Default: text("'1'"
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2Payment {
  posid: number;
  orderid: number;
  amount?: number;
  pmnttypeid: number;
  roomid?: number;
  rsvid?: number;
  groupid?: number;
  ownerid?: number;
  receiptno: string;
  description: string;
  transectionno?: string;
  gatewaytransdata?: string;
  amountothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurency?: string;
  paymentdate?: Date;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  countersessionid?: number;
  isrefunded?: number;
  paidby?: number;
  isadjustment?: number;
  paynowortrnsroom?: string;
  pospaymentmasterid?: number;
  ccchequeno?: string;
  moved?: number;
  issync?: number;
  sessionid?: string;
  bankid?: number;
  isshow?: number;
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2Payment {
  posid?: number;
  orderid?: number;
  amount?: number;
  pmnttypeid?: number;
  roomid?: number;
  rsvid?: number;
  groupid?: number;
  ownerid?: number;
  receiptno?: string;
  description?: string;
  transectionno?: string;
  gatewaytransdata?: string;
  amountothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurency?: string;
  paymentdate?: Date;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  countersessionid?: number;
  isrefunded?: number;
  paidby?: number;
  isadjustment?: number;
  paynowortrnsroom?: string;
  pospaymentmasterid?: number;
  ccchequeno?: string;
  moved?: number;
  issync?: number;
  sessionid?: string;
  bankid?: number;
  isshow?: number;
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}
