/**
 * PaymentReceiptDetail Model Interfaces
 * Database table: paymentReceiptDetail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPaymentReceiptDetail {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  pmntreceiptno: string;  // Required
  rmtaxableamt?: number;  // Default: text("'0.000000'"
  rmtax?: number;  // Default: text("'0.000000'"
  postaxableamt?: number;  // Default: text("'0.000000'"
  postax?: number;  // Default: text("'0.000000'"
  paymentid?: number;  // Primary key - auto-generated
  ispaymentref: number;  // Required
  ownerdetail?: string;
  rsvdetail?: string;
}

// Create interface - for new entity creation
export interface ICreatePaymentReceiptDetail {
  pmntreceiptno: string;
  rmtaxableamt?: number;
  rmtax?: number;
  postaxableamt?: number;
  postax?: number;
  ispaymentref: number;
  ownerdetail?: string;
  rsvdetail?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePaymentReceiptDetail {
  pmntreceiptno?: string;
  rmtaxableamt?: number;
  rmtax?: number;
  postaxableamt?: number;
  postax?: number;
  ispaymentref?: number;
  ownerdetail?: string;
  rsvdetail?: string;
}
