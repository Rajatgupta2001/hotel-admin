/**
 * PosTransTaxes Model
 * Database table: postranstaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosTransTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  invoiceid?: number;
  transid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  refid?: number;
  taxamount?: number;
  amounttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  appliedamount?: number;
  tax?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosTransTaxes {
  hotelid?: number;
  rsvid?: number;
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
export interface IUpdatePosTransTaxes {
  hotelid?: number;
  rsvid?: number;
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