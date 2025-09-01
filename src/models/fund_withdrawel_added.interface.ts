/**
 * FundWithdrawelAdded Model
 * Database table: fundwithdraweladded
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFundWithdrawelAdded {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  cashdrawerid?: number;
  payid?: number;
  counterid?: number;
  amount?: number;
  trantype?: string;
  datecreated?: Date;
  createdby?: number;  // User ID reference
  fundtransferedby?: string;
  comments?: string;
  cashdenomination?: Date;
}

export interface ICreateFundWithdrawelAdded {
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
  cashdenomination?: Date;
}
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
  cashdenomination?: Date;
}