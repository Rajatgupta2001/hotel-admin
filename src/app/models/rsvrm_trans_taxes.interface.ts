/**
 * RsvrmTransTaxes Model
 * Database table: rsvrmtranstaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvrmTransTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  refid?: number;
  taxslabid?: number;
  taxamount?: number;
  amounttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  appon?: string;
  rackrate?: number;
  roomrent?: number;
  tax?: number;
  isnotmaintr?: number;
  exemptedamount?: number;
  isexempted?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  childtransid?: number;
  effectivedate?: Date;
}

export interface ICreateRsvrmTransTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  refid?: number;
  taxslabid?: number;
  taxamount?: number;
  amounttype?: string;
  createdby?: number;
  appon?: string;
  rackrate?: number;
  roomrent?: number;
  tax?: number;
  isnotmaintr?: number;
  exemptedamount?: number;
  isexempted?: number;
  modifiedby?: number;
  childtransid?: number;
  effectivedate?: Date;
}
export interface IUpdateRsvrmTransTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transid?: number;
  taxid?: number;
  type?: string;
  parenttaxid?: number;
  refid?: number;
  taxslabid?: number;
  taxamount?: number;
  amounttype?: string;
  createdby?: number;
  appon?: string;
  rackrate?: number;
  roomrent?: number;
  tax?: number;
  isnotmaintr?: number;
  exemptedamount?: number;
  isexempted?: number;
  modifiedby?: number;
  childtransid?: number;
  effectivedate?: Date;
}