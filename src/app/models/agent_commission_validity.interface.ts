/**
 * AgentCommissionValidity Model
 * Database table: agentcommissionvalidity
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentCommissionValidity {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  validfrom?: Date;
  validto?: Date;
  remarks?: string;
  seasonid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAgentCommissionValidity {
  hotelid?: number;
  agentid?: number;
  validfrom?: Date;
  validto?: Date;
  remarks?: string;
  seasonid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateAgentCommissionValidity {
  hotelid?: number;
  agentid?: number;
  validfrom?: Date;
  validto?: Date;
  remarks?: string;
  seasonid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}