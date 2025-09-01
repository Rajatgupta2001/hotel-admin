/**
 * AgentCmsnPmntMstr Model Interfaces
 * Database table: agentCmsnPmntMstr
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentCmsnPmntMstr {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  agentid: number;  // Required
  voucherno: string;  // Required
  totalamount: number;  // Required
  transdate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAgentCmsnPmntMstr {
  hotelid: number;
  agentid: number;
  voucherno: string;
  totalamount: number;
  transdate: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAgentCmsnPmntMstr {
  hotelid?: number;
  agentid?: number;
  voucherno?: string;
  totalamount?: number;
  transdate?: Date;
  createdby?: number;
  modifiedby?: number;
}
