/**
 * PaymentTaxBreakup Model Interfaces
 * Database table: paymentTaxBreakup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPaymentTaxBreakup {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  paymentid: string;  // Required
  paymentposid?: string;
  paidamount?: number;
  inclid?: number;
  taxid: number;  // Required
  taxslabid?: number;
  parenttaxid?: number;
  transtype?: string;
  type?: string;  // Default: text("'TAX'"
  tax?: number;
  taxtype?: string;
  taxappliedonamt?: number;
  taxamount?: number;
  mainamount?: number;
  postingdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  taxgroups?: string;
}

// Create interface - for new entity creation
export interface ICreatePaymentTaxBreakup {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  paymentid: string;
  paymentposid?: string;
  paidamount?: number;
  inclid?: number;
  taxid: number;
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

// Update interface - for entity updates (all fields optional)
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
