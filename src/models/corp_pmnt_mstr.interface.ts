/**
 * CorpPmntMstr Model
 * Database table: corppmntmstr
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpPmntMstr {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  corpid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCorpPmntMstr {
  hotelid?: number;
  corpid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCorpPmntMstr {
  hotelid?: number;
  corpid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdby?: number;
  modifiedby?: number;
}