/**
 * CorpCreditTransactions Model
 * Database table: corpcredittransactions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpCreditTransactions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  corpid?: number;
  foliono?: number;
  rsvid?: number;
  transdate?: Date;
  billamount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  paid?: number;
  paidtype?: string;
  paidamount?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCorpCreditTransactions {
  hotelid?: number;
  corpid?: number;
  foliono?: number;
  rsvid?: number;
  transdate?: Date;
  billamount?: number;
  createdby?: number;
  status?: string;
  paid?: number;
  paidtype?: string;
  paidamount?: number;
  modifiedby?: number;
}
export interface IUpdateCorpCreditTransactions {
  hotelid?: number;
  corpid?: number;
  foliono?: number;
  rsvid?: number;
  transdate?: Date;
  billamount?: number;
  createdby?: number;
  status?: string;
  paid?: number;
  paidtype?: string;
  paidamount?: number;
  modifiedby?: number;
}