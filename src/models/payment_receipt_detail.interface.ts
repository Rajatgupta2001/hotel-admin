/**
 * PaymentReceiptDetail Model
 * Database table: paymentreceiptdetail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPaymentReceiptDetail {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pmntreceiptno?: string;
  rmtaxableamt?: number;
  rmtax?: number;
  postaxableamt?: number;
  postax?: number;
  paymentid?: number;
  ispaymentref?: number;
  ownerdetail?: string;
  rsvdetail?: string;
}

export interface ICreatePaymentReceiptDetail {
  hotelid?: number;
  pmntreceiptno?: string;
  rmtaxableamt?: number;
  rmtax?: number;
  postaxableamt?: number;
  postax?: number;
  paymentid?: number;
  ispaymentref?: number;
  ownerdetail?: string;
  rsvdetail?: string;
}
export interface IUpdatePaymentReceiptDetail {
  hotelid?: number;
  pmntreceiptno?: string;
  rmtaxableamt?: number;
  rmtax?: number;
  postaxableamt?: number;
  postax?: number;
  paymentid?: number;
  ispaymentref?: number;
  ownerdetail?: string;
  rsvdetail?: string;
}