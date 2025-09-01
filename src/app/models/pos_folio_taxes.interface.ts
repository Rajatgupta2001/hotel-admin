/**
 * PosFolioTaxes Model
 * Database table: posfoliotaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosFolioTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  invoiceid?: number;
  folioid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  taxamount?: number;
  amounttype?: string;
  tax?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosFolioTaxes {
  hotelid?: number;
  invoiceid?: number;
  folioid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  taxamount?: number;
  amounttype?: string;
  tax?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosFolioTaxes {
  hotelid?: number;
  invoiceid?: number;
  folioid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  taxamount?: number;
  amounttype?: string;
  tax?: number;
  createdby?: number;
  modifiedby?: number;
}