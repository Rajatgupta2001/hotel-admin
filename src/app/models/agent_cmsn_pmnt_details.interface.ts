/**
 * AgentCmsnPmntDetails Model
 * Database table: agentcmsnpmntdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAgentCmsnPmntDetails {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAgentCmsnPmntDetails {
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