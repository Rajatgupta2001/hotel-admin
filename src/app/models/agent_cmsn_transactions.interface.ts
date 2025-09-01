/**
 * AgentCmsnTransactions Model
 * Database table: agentcmsntransactions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentCmsnTransactions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  foliono?: number;
  reservationid?: number;
  posid?: number;
  comsnper?: number;
  comsnamount?: number;
  transdate?: Date;
  transamount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  paid?: number;
  paidtype?: string;
  paidamount?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAgentCmsnTransactions {
  hotelid?: number;
  agentid?: number;
  foliono?: number;
  reservationid?: number;
  posid?: number;
  comsnper?: number;
  comsnamount?: number;
  transdate?: Date;
  transamount?: number;
  createdby?: number;
  status?: string;
  paid?: number;
  paidtype?: string;
  paidamount?: number;
  modifiedby?: number;
}
export interface IUpdateAgentCmsnTransactions {
  hotelid?: number;
  agentid?: number;
  foliono?: number;
  reservationid?: number;
  posid?: number;
  comsnper?: number;
  comsnamount?: number;
  transdate?: Date;
  transamount?: number;
  createdby?: number;
  status?: string;
  paid?: number;
  paidtype?: string;
  paidamount?: number;
  modifiedby?: number;
}