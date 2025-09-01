/**
 * AgentCmsnPmntMstr Model
 * Database table: agentcmsnpmntmstr
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentCmsnPmntMstr {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAgentCmsnPmntMstr {
  hotelid?: number;
  agentid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateAgentCmsnPmntMstr {
  hotelid?: number;
  agentid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdby?: number;
  modifiedby?: number;
}