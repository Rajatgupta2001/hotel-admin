/**
 * HotelInvoiceTransTaxes Model
 * Database table: hotelinvoicetranstaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelInvoiceTransTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  transid?: number;
  taxid?: number;
  taxamount?: number;
  amounttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  appliedamount?: number;
  appliedamountaftdisc?: number;
  tax?: number;
  taxaftdisc?: number;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateHotelInvoiceTransTaxes {
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