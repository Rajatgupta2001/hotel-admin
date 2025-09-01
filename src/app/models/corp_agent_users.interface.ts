/**
 * CorpAgentUsers Model
 * Database table: corpagentusers
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpAgentUsers {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  usertype?: string;
  gid?: string;
  refid?: number;
  reftype?: string;
  regnumber?: string;
  codeno?: string;
  logo?: string;
  businessname?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreateCorpAgentUsers {
  hotelid?: number;
  compid?: number;
  usertype?: string;
  gid?: string;
  refid?: number;
  reftype?: string;
  regnumber?: string;
  codeno?: string;
  logo?: string;
  businessname?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdateCorpAgentUsers {
  hotelid?: number;
  compid?: number;
  usertype?: string;
  gid?: string;
  refid?: number;
  reftype?: string;
  regnumber?: string;
  codeno?: string;
  logo?: string;
  businessname?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}