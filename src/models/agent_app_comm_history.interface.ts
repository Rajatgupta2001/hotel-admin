/**
 * AgentAppCommHistory Model
 * Database table: agentappcommhistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentAppCommHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  commission?: number;
  commisssiontype?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: Date;  // User ID reference
  status?: string;
  effectivedate?: Date;
}

export interface ICreateAgentAppCommHistory {
  hotelid?: number;
  agentid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  commission?: number;
  commisssiontype?: string;
  modifiedby?: Date;
  status?: string;
  effectivedate?: Date;
}
export interface IUpdateAgentAppCommHistory {
  hotelid?: number;
  agentid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  commission?: number;
  commisssiontype?: string;
  modifiedby?: Date;
  status?: string;
  effectivedate?: Date;
}