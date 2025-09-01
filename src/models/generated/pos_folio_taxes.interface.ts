/**
 * PosFolioTaxes Model Interfaces
 * Database table: posFolioTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosFolioTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  invoiceid?: number;
  folioid: number;  // Required
  taxid: number;  // Required
  type?: string;  // Default: text("'TAX'"
  parenttaxid?: number;  // Default: 0
  taxamount?: number;
  amounttype: string;  // Required
  tax?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosFolioTaxes {
  hotelid: number;
  invoiceid?: number;
  folioid: number;
  taxid: number;
  type?: string;
  parenttaxid?: number;
  taxamount?: number;
  amounttype: string;
  tax?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
