/**
 * AgentCommissionPaidTrans Model Interfaces
 * Database table: agentCommissionPaidTrans
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentCommissionPaidTrans {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  agentid: number;  // Required
  voucherno: number;  // Required
  commissiontransid: number;  // Required
  transdate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAgentCommissionPaidTrans {
  hotelid: number;
  agentid: number;
  voucherno: number;
  commissiontransid: number;
  transdate: Date;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAgentCommissionPaidTrans {
  hotelid?: number;
  agentid?: number;
  voucherno?: number;
  commissiontransid?: number;
  transdate?: Date;
  modifiedby?: number;
}
