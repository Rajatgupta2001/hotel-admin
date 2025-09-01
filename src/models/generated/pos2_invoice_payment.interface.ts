/**
 * Pos2InvoicePayment Model Interfaces
 * Database table: pos2InvoicePayment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2InvoicePayment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  posid?: number;
  invoiceid: number;  // Required
  paymentid: number;  // Required
  amount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  paynowortrnsroom?: string;
  issync?: number;  // Default: 0
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2InvoicePayment {
  posid?: number;
  invoiceid: number;
  paymentid: number;
  amount?: number;
  createdby?: number;
  modifiedby?: number;
  paynowortrnsroom?: string;
  issync?: number;
  oldinvoiceid?: number;
  oldpospaymentid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2InvoicePayment {
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
