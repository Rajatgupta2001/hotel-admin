/**
 * RsvPmntDetails Model Interfaces
 * Database table: rsvPmntDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvPmntDetails {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvpmntmstrid?: number;  // Default: 0
  rsvid: number;  // Required
  groupid?: number;  // Default: 0
  parentfoliono?: string;
  foliono?: string;
  guestid: number;  // Required
  corpid?: number;  // Default: 0
  agentid?: number;  // Default: 0
  pmnttypeid: number;  // Required
  cardtype?: string;  // Default: ''
  cheque: string;  // Required
  amount: number;  // Required
  receiptno: string;  // Required
  description: string;  // Required
  custdescription?: string;
  paymentdate: Date;  // Required
  paymentfrom?: number;  // Default: 0
  transectionno?: string;  // Default: ''
  gatewaytransdata?: string;
  paidamtothercurr?: number;  // Default: text("'0.000000'"
  isconverted?: number;  // Default: 0
  exchangerate?: number;  // Default: text("'0.000000'"
  excurency?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: 0
  countersessionid: number;  // Required
  isrefunded?: number;  // Default: 0
  actgustid?: number;  // Default: 0
  isshowed?: number;  // Default: text("'1'"
  posid?: number;  // Default: 0
  pospaymentid?: number;  // Default: 0
  isadjustment?: number;  // Default: 0
  vatableamount?: number;
  isrevoked?: number;  // Default: 0
  bankid?: number;  // Default: 0
  pmntreceiptno?: string;
}

// Create interface - for new entity creation
export interface ICreateRsvPmntDetails {
  hotelid: number;
  rsvpmntmstrid?: number;
  rsvid: number;
  groupid?: number;
  parentfoliono?: string;
  foliono?: string;
  guestid: number;
  corpid?: number;
  agentid?: number;
  pmnttypeid: number;
  cardtype?: string;
  cheque: string;
  amount: number;
  receiptno: string;
  description: string;
  custdescription?: string;
  paymentdate: Date;
  paymentfrom?: number;
  transectionno?: string;
  gatewaytransdata?: string;
  paidamtothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurency?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  countersessionid: number;
  isrefunded?: number;
  actgustid?: number;
  isshowed?: number;
  posid?: number;
  pospaymentid?: number;
  isadjustment?: number;
  vatableamount?: number;
  isrevoked?: number;
  bankid?: number;
  pmntreceiptno?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvPmntDetails {
  hotelid?: number;
  rsvpmntmstrid?: number;
  rsvid?: number;
  groupid?: number;
  parentfoliono?: string;
  foliono?: string;
  guestid?: number;
  corpid?: number;
  agentid?: number;
  pmnttypeid?: number;
  cardtype?: string;
  cheque?: string;
  amount?: number;
  receiptno?: string;
  description?: string;
  custdescription?: string;
  paymentdate?: Date;
  paymentfrom?: number;
  transectionno?: string;
  gatewaytransdata?: string;
  paidamtothercurr?: number;
  isconverted?: number;
  exchangerate?: number;
  excurency?: string;
  createdby?: number;
  modifiedby?: number;
  counterid?: number;
  countersessionid?: number;
  isrefunded?: number;
  actgustid?: number;
  isshowed?: number;
  posid?: number;
  pospaymentid?: number;
  isadjustment?: number;
  vatableamount?: number;
  isrevoked?: number;
  bankid?: number;
  pmntreceiptno?: string;
}
