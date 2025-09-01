/**
 * Pos2InvoiceTaxDetail Model
 * Database table: pos2invoicetaxdetail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2InvoiceTaxDetail {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  oldtranstaxid?: number;
}

export interface ICreatePos2InvoiceTaxDetail {
  hotelid?: number;
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
export interface IUpdatePos2InvoiceTaxDetail {
  hotelid?: number;
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