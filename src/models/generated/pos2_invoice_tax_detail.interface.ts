/**
 * Pos2InvoiceTaxDetail Model Interfaces
 * Database table: pos2InvoiceTaxDetail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2InvoiceTaxDetail {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  posid?: number;
  invoiceid?: number;
  invoiceitemid?: number;  // Default: 0
  taxid?: number;
  type?: string;  // Default: text("'TAX'"
  parenttaxid?: number;  // Default: 0
  parentid?: number;  // Default: 0
  appliedamount?: number;  // Default: text("'0.000000'"
  appliedunit?: number;  // Default: text("'0.000000'"
  tax?: number;  // Default: text("'0.000000'"
  taxrate?: number;  // Default: text("'0.000000'"
  taxtype?: string;  // Default: text("'PV'"
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
  oldtranstaxid?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2InvoiceTaxDetail {
  posid?: number;
  invoiceid?: number;
  invoiceitemid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  parentid?: number;
  appliedamount?: number;
  appliedunit?: number;
  tax?: number;
  taxrate?: number;
  taxtype?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  oldtranstaxid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2InvoiceTaxDetail {
  posid?: number;
  invoiceid?: number;
  invoiceitemid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  parentid?: number;
  appliedamount?: number;
  appliedunit?: number;
  tax?: number;
  taxrate?: number;
  taxtype?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  oldtranstaxid?: number;
}
