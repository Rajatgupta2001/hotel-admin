/**
 * CorpAgentLogin Model
 * Database table: corpagentlogin
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpAgentLogin {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  username?: string;
  password?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  resetpassflag?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  corpagentuserid?: number;
}

export interface ICreateCorpAgentLogin {
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  username?: string;
  password?: string;
  createdby?: number;
  status?: string;
  resetpassflag?: string;
  modifiedby?: number;
  corpagentuserid?: number;
}
export interface IUpdateCorpAgentLogin {
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  username?: string;
  password?: string;
  createdby?: number;
  status?: string;
  resetpassflag?: string;
  modifiedby?: number;
  corpagentuserid?: number;
}