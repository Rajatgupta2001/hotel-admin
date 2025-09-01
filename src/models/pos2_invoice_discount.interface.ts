/**
 * Pos2InvoiceDiscount Model
 * Database table: pos2invoicediscount
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2InvoiceDiscount {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  invoiceid?: number;
  discountseq?: number;
  discountnature?: string;
  discountrate?: number;
  discounttype?: string;
  reasonid?: number;
  discountreason?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  oldinvoiceid?: number;
}

export interface ICreatePos2InvoiceDiscount {
  hotelid?: number;
  posid?: number;
  invoiceid?: number;
  discountseq?: number;
  discountnature?: string;
  discountrate?: number;
  discounttype?: string;
  reasonid?: number;
  discountreason?: string;
  createdby?: number;
  modifiedby?: number;
  oldinvoiceid?: number;
}
export interface IUpdatePos2InvoiceDiscount {
  hotelid?: number;
  posid?: number;
  invoiceid?: number;
  discountseq?: number;
  discountnature?: string;
  discountrate?: number;
  discounttype?: string;
  reasonid?: number;
  discountreason?: string;
  createdby?: number;
  modifiedby?: number;
  oldinvoiceid?: number;
}