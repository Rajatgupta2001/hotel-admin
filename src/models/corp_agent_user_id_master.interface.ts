/**
 * CorpAgentUserIdMaster Model
 * Database table: corpagentuseridmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpAgentUserIdMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  corpagentid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateCorpAgentUserIdMaster {
  hotelid?: number;
  compid?: number;
  corpagentid?: number;
}
export interface IUpdateCorpAgentUserIdMaster {
  hotelid?: number;
  compid?: number;
  corpagentid?: number;
}