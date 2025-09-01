/**
 * AgentCmsnTransactions Model Interfaces
 * Database table: agentCmsnTransactions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentCmsnTransactions {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  agentid: number;  // Required
  foliono: number;  // Required
  reservationid: number;  // Required
  posid: number;  // Required
  comsnper: number;  // Required
  comsnamount: number;  // Required
  transdate: Date;  // Required
  transamount: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  paid: number;  // Required
  paidtype: string;  // Required
  paidamount: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAgentCmsnTransactions {
  hotelid: number;
  agentid: number;
  foliono: number;
  reservationid: number;
  posid: number;
  comsnper: number;
  comsnamount: number;
  transdate: Date;
  transamount: number;
  createdby?: number;
  status: string;
  paid: number;
  paidtype: string;
  paidamount: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
