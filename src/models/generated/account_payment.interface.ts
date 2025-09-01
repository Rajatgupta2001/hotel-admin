/**
 * AccountPayment Model Interfaces
 * Database table: accountPayment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountPayment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  counterid?: number;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  refid?: number;
  amount?: number;
  settle?: number;
  reftype?: string;
  paymode?: string;
  paytypeid?: number;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  paymentdate?: Date;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  issync?: number;  // Default: 0
  xeropaymentinv?: number;  // Default: 0
  commpayment?: number;  // Default: 0
  invrefid?: number;
  posid?: number;  // Default: 0
  isadhoc?: number;  // Default: 0
  parentpaymentid?: number;  // Default: 0
  rpid?: number;
}

// Create interface - for new entity creation
export interface ICreateAccountPayment {
  hotelid?: number;
  counterid?: number;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  refid?: number;
  amount?: number;
  settle?: number;
  reftype?: string;
  paymode?: string;
  paytypeid?: number;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  paymentdate?: Date;
  nadate?: Date;
  createdby?: number;
  issync?: number;
  xeropaymentinv?: number;
  commpayment?: number;
  invrefid?: number;
  posid?: number;
  isadhoc?: number;
  parentpaymentid?: number;
  rpid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountPayment {
  hotelid?: number;
  counterid?: number;
  foliono?: string;
  customfoliono?: string;
  viewfoliono?: string;
  refid?: number;
  amount?: number;
  settle?: number;
  reftype?: string;
  paymode?: string;
  paytypeid?: number;
  ccchequeno?: string;
  receipt?: string;
  description?: string;
  paymentdate?: Date;
  nadate?: Date;
  createdby?: number;
  issync?: number;
  xeropaymentinv?: number;
  commpayment?: number;
  invrefid?: number;
  posid?: number;
  isadhoc?: number;
  parentpaymentid?: number;
  rpid?: number;
}
