/**
 * Pos2InvoiceDiscount Model Interfaces
 * Database table: pos2InvoiceDiscount
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2InvoiceDiscount {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  invoiceid?: number;  // Default: 0
  discountseq?: number;
  discountnature?: string;
  discountrate?: number;  // Default: text("'0.000000'"
  discounttype?: string;  // Default: text("'PV'"
  reasonid?: number;
  discountreason?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  oldinvoiceid?: number;
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
