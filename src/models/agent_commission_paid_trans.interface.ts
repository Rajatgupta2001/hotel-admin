/**
 * AgentCommissionPaidTrans Model
 * Database table: agentcommissionpaidtrans
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentCommissionPaidTrans {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  voucherno?: number;
  commissiontransid?: number;
  transdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAgentCommissionPaidTrans {
  hotelid?: number;
  agentid?: number;
  voucherno?: number;
  commissiontransid?: number;
  transdate?: Date;
  modifiedby?: number;
}
export interface IUpdateAgentCommissionPaidTrans {
  hotelid?: number;
  agentid?: number;
  voucherno?: number;
  commissiontransid?: number;
  transdate?: Date;
  modifiedby?: number;
}