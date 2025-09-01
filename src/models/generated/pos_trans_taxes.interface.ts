/**
 * PosTransTaxes Model Interfaces
 * Database table: posTransTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosTransTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  rsvid?: number;  // Primary key - auto-generated
  groupid?: number;  // Default: 0
  invoiceid?: number;
  transid: number;  // Required
  taxid: number;  // Required
  type?: string;  // Default: text("'TAX'"
  parenttaxid?: number;  // Default: 0
  refid?: number;  // Default: 0
  taxamount: number;  // Required
  amounttype: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  appliedamount?: number;
  tax?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreatePosTransTaxes {
  groupid?: number;
  invoiceid?: number;
  transid: number;
  taxid: number;
  type?: string;
  parenttaxid?: number;
  refid?: number;
  taxamount: number;
  amounttype: string;
  createdby?: number;
  appliedamount?: number;
  tax?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosTransTaxes {
  groupid?: number;
  invoiceid?: number;
  transid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  refid?: number;
  taxamount?: number;
  amounttype?: string;
  createdby?: number;
  appliedamount?: number;
  tax?: number;
  modifiedby?: number;
}
