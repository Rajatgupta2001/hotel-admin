/**
 * BillingAccountPayments Model Interfaces
 * Database table: billingAccountPayments
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingAccountPayments {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  grouptype?: string;
  groupid?: number;
  paytypemode?: string;
  paytypeid?: number;
  extrefid?: number;  // Primary key - auto-generated
  customeremail?: string;
  paymentdate?: Date;
  amount?: number;
  chequeno?: string;
  receiptno?: string;
  description?: string;
  paidamtothercurr?: number;  // Default: text("'0.000000'"
  exchangerate?: number;  // Default: text("'0.000000'"
  excurency?: string;
  isconverted?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBillingAccountPayments {
  hotelid: number;
  grouptype?: string;
  groupid?: number;
  paytypemode?: string;
  paytypeid?: number;
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

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingAccountPayments {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  paytypemode?: string;
  paytypeid?: number;
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
