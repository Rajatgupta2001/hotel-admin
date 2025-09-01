/**
 * Pos2InvoicePayment Model
 * Database table: pos2invoicepayment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2InvoicePayment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  invoiceid?: number;
  paymentid?: number;
  amount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  paynowortrnsroom?: string;
  issync?: number;
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}

export interface ICreatePos2InvoicePayment {
  hotelid?: number;
  posid?: number;
  invoiceid?: number;
  paymentid?: number;
  amount?: number;
  createdby?: number;
  modifiedby?: number;
  paynowortrnsroom?: string;
  issync?: number;
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}
export interface IUpdatePos2InvoicePayment {
  hotelid?: number;
  posid?: number;
  invoiceid?: number;
  paymentid?: number;
  amount?: number;
  createdby?: number;
  modifiedby?: number;
  paynowortrnsroom?: string;
  issync?: number;
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}