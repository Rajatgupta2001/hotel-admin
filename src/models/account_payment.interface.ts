/**
 * AccountPayment Model
 * Database table: accountpayment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
  issync?: number;
  xeropaymentinv?: number;
  commpayment?: number;
  invrefid?: number;
  posid?: number;
  isadhoc?: number;
  parentpaymentid?: number;
  rpid?: number;
}

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