import type { IPayTypes } from './pay_types.interface';
/**
 * RsvPmntDetails Model
 * Database table: rsvpmntdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvPmntDetails {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
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
  paymentType?: IPayTypes;
}

export interface ICreateRsvPmntDetails {
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
  paymentType?: IPayTypes;
}
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
  paymentType?: IPayTypes;
}