/**
 * PaymentTaxBreakup Model
 * Database table: paymenttaxbreakup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPaymentTaxBreakup {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  paymentid?: string;
  paymentposid?: string;
  paidamount?: number;
  inclid?: number;
  taxid?: number;
  taxslabid?: number;
  parenttaxid?: number;
  transtype?: string;
  type?: string;
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  mainamount?: number;
  postingdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  taxgroups?: string;
}

export interface ICreatePaymentTaxBreakup {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  paymentid?: string;
  paymentposid?: string;
  paidamount?: number;
  inclid?: number;
  taxid?: number;
  taxslabid?: number;
  parenttaxid?: number;
  transtype?: string;
  type?: string;
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  mainamount?: number;
  postingdate?: Date;
  createdby?: number;
  taxgroups?: string;
}
export interface IUpdatePaymentTaxBreakup {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  paymentid?: string;
  paymentposid?: string;
  paidamount?: number;
  inclid?: number;
  taxid?: number;
  taxslabid?: number;
  parenttaxid?: number;
  transtype?: string;
  type?: string;
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  mainamount?: number;
  postingdate?: Date;
  createdby?: number;
  taxgroups?: string;
}