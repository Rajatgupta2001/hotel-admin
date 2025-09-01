/**
 * AgentIdMaster Model
 * Database table: agentidmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentIdMaster {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  agentid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateAgentIdMaster {
  compid?: number;
  hotelid?: number;
  agentid?: number;
}
export interface IUpdateAgentIdMaster {
  compid?: number;
  hotelid?: number;
  agentid?: number;
}