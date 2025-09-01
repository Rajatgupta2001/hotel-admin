/**
 * AgentPosCommission Model
 * Database table: agentposcommission
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentPosCommission {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  pospointid?: number;
  commissionper?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAgentPosCommission {
  hotelid?: number;
  agentid?: number;
  pospointid?: number;
  commissionper?: number;
  createdby?: Date;
}
export interface IUpdateAgentPosCommission {
  hotelid?: number;
  agentid?: number;
  pospointid?: number;
  commissionper?: number;
  createdby?: Date;
}