/**
 * RsvRmFutureInclTaxes Model Interfaces
 * Database table: rsvRmFutureInclTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmFutureInclTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;  // Default: 0
  groupid?: number;  // Default: 0
  transid?: number;
  taxid?: number;
  parenttaxid?: number;  // Default: 0
  refid?: number;  // Default: 0
  taxslabid?: number;
  type?: string;  // Default: text("'TAX'"
  taxamount?: number;
  amounttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  appon?: string;  // Default: text("'TC'"
  rackrate?: number;
  roomrate?: number;
  tax?: number;
  isnotmaintr?: number;  // Default: 0
  exemptedamount?: number;  // Default: text("'0.000000'"
  isexempted?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRsvRmFutureInclTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transid?: number;
  taxid?: number;
  parenttaxid?: number;
  refid?: number;
  taxslabid?: number;
  type?: string;
  taxamount?: number;
  amounttype?: string;
  createdby?: number;
  appon?: string;
  rackrate?: number;
  roomrate?: number;
  tax?: number;
  isnotmaintr?: number;
  exemptedamount?: number;
  isexempted?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRmFutureInclTaxes {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  transid?: number;
  taxid?: number;
  parenttaxid?: number;
  refid?: number;
  taxslabid?: number;
  type?: string;
  taxamount?: number;
  amounttype?: string;
  createdby?: number;
  appon?: string;
  rackrate?: number;
  roomrate?: number;
  tax?: number;
  isnotmaintr?: number;
  exemptedamount?: number;
  isexempted?: number;
  modifiedby?: number;
}
