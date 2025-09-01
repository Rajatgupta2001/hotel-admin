/**
 * Pos2Payment Model
 * Database table: pos2payment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2Payment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
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

export interface ICreatePos2Payment {
  hotelid?: number;
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
export interface IUpdatePos2Payment {
  hotelid?: number;
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