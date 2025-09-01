/**
 * RsvrmTransTaxes Model Interfaces
 * Database table: rsvrmTransTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvrmTransTaxes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  rsvid?: number;  // Primary key - auto-generated
  groupid?: number;  // Default: 0
  transid: number;  // Required
  taxid: number;  // Required
  type?: string;  // Default: text("'TAX'"
  parenttaxid?: number;  // Default: 0
  refid?: number;  // Default: 0
  taxslabid?: number;
  taxamount: number;  // Required
  amounttype: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  appon?: string;  // Default: text("'TC'"
  rackrate?: number;
  roomrent?: number;
  tax?: number;
  isnotmaintr?: number;  // Default: 0
  exemptedamount?: number;  // Default: text("'0.000000'"
  isexempted?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  childtransid?: number;
  effectivedate?: Date;
}

// Create interface - for new entity creation
export interface ICreateRsvrmTransTaxes {
  groupid?: number;
  transid: number;
  taxid: number;
  type?: string;
  parenttaxid?: number;
  refid?: number;
  taxslabid?: number;
  taxamount: number;
  amounttype: string;
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

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvrmTransTaxes {
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
