/**
 * HotelInvoiceTransTaxes Model Interfaces
 * Database table: hotelInvoiceTransTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelInvoiceTransTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  transid: number;  // Required
  taxid: number;  // Required
  taxamount: number;  // Required
  amounttype: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  appliedamount?: number;
  appliedamountaftdisc?: number;
  tax?: number;
  taxaftdisc?: number;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateHotelInvoiceTransTaxes {
  hotelid: number;
  transid: number;
  taxid: number;
  taxamount: number;
  amounttype: string;
  appliedamount?: number;
  appliedamountaftdisc?: number;
  tax?: number;
  taxaftdisc?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelInvoiceTransTaxes {
  hotelid?: number;
  transid?: number;
  taxid?: number;
  taxamount?: number;
  amounttype?: string;
  appliedamount?: number;
  appliedamountaftdisc?: number;
  tax?: number;
  taxaftdisc?: number;
}
