/**
 * BillingAccountPayments Model
 * Database table: billingaccountpayments
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingAccountPayments {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  paytypemode?: string;
  paytypeid?: number;
  extrefid?: number;
  customeremail?: string;
  paymentdate?: Date;
  amount?: number;
  chequeno?: string;
  receiptno?: string;
  description?: string;
  paidamtothercurr?: number;
  exchangerate?: number;
  excurency?: string;
  isconverted?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBillingAccountPayments {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  paytypemode?: string;
  paytypeid?: number;
  extrefid?: number;
  customeremail?: string;
  paymentdate?: Date;
  amount?: number;
  chequeno?: string;
  receiptno?: string;
  description?: string;
  paidamtothercurr?: number;
  exchangerate?: number;
  excurency?: string;
  isconverted?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateBillingAccountPayments {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  paytypemode?: string;
  paytypeid?: number;
  extrefid?: number;
  customeremail?: string;
  paymentdate?: Date;
  amount?: number;
  chequeno?: string;
  receiptno?: string;
  description?: string;
  paidamtothercurr?: number;
  exchangerate?: number;
  excurency?: string;
  isconverted?: number;
  createdby?: number;
  modifiedby?: number;
}