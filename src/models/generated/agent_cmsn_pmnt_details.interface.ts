/**
 * AgentCmsnPmntDetails Model Interfaces
 * Database table: agentCmsnPmntDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentCmsnPmntDetails {
  id?: number;  // Primary key - auto-generated
  agentid: number;  // Required
  agentcmsnpmntmstrid: number;  // Required
  voucherno: string;  // Required
  pmnttypeid: number;  // Required
  cardtype: number;  // Required
  cheque: number;  // Required
  amount: number;  // Required
  reciptno: string;  // Required
  description: string;  // Required
  paymentdate: Date;  // Required
  transactionno: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAgentCmsnPmntDetails {
  agentid: number;
  agentcmsnpmntmstrid: number;
  voucherno: string;
  pmnttypeid: number;
  cardtype: number;
  cheque: number;
  amount: number;
  reciptno: string;
  description: string;
  paymentdate: Date;
  transactionno: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAgentCmsnPmntDetails {
  agentid?: number;
  agentcmsnpmntmstrid?: number;
  voucherno?: string;
  pmnttypeid?: number;
  cardtype?: number;
  cheque?: number;
  amount?: number;
  reciptno?: string;
  description?: string;
  paymentdate?: Date;
  transactionno?: string;
  createdby?: number;
  modifiedby?: number;
}
