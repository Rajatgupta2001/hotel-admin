/**
 * FundWithdrawelAdded Model Interfaces
 * Database table: fundWithdrawelAdded
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFundWithdrawelAdded {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  cashdrawerid: number;  // Required
  payid: number;  // Required
  counterid: number;  // Required
  amount?: number;
  trantype?: string;  // Default: text("'withDraw'"
  datecreated: Date;  // Required
  createdby?: number;  // User ID reference
  fundtransferedby: string;  // Required
  comments: string;  // Required
  cashdenomination?: any;
}

// Create interface - for new entity creation
export interface ICreateFundWithdrawelAdded {
  hotelid: number;
  cashdrawerid: number;
  payid: number;
  counterid: number;
  amount?: number;
  trantype?: string;
  datecreated: Date;
  createdby?: number;
  fundtransferedby: string;
  comments: string;
  cashdenomination?: any;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFundWithdrawelAdded {
  hotelid?: number;
  cashdrawerid?: number;
  payid?: number;
  counterid?: number;
  amount?: number;
  trantype?: string;
  datecreated?: Date;
  createdby?: number;
  fundtransferedby?: string;
  comments?: string;
  cashdenomination?: any;
}
