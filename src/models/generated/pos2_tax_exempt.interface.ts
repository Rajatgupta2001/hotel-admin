/**
 * Pos2TaxExempt Model Interfaces
 * Database table: pos2TaxExempt
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2TaxExempt {
  id?: number;  // Primary key - auto-generated
  pos2invoicetaxid: number;  // Required
  hotelid?: number;
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
  reasonid?: number;
  reasondetail?: string;
  exemptedby?: number;
  exemptedon?: Date;
}

// Create interface - for new entity creation
export interface ICreatePos2TaxExempt {
  pos2invoicetaxid: number;
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
  reasonid?: number;
  reasondetail?: string;
  exemptedby?: number;
  exemptedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2TaxExempt {
  pos2invoicetaxid?: number;
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
  reasonid?: number;
  reasondetail?: string;
  exemptedby?: number;
  exemptedon?: Date;
}
