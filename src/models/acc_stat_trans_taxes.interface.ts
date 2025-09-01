/**
 * AccStatTransTaxes Model
 * Database table: accstattranstaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccStatTransTaxes {
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
}

export interface ICreateAccStatTransTaxes {
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
}
export interface IUpdateAccStatTransTaxes {
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
}