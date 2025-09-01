/**
 * Pos2TaxExempt Model
 * Database table: pos2taxexempt
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2TaxExempt {
  id?: number;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  oldtranstaxid?: number;
  reasonid?: number;
  reasondetail?: string;
  exemptedby?: number;
  exemptedon?: Date;
}

export interface ICreatePos2TaxExempt {
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