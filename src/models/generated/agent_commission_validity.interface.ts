/**
 * AgentCommissionValidity Model Interfaces
 * Database table: agentCommissionValidity
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentCommissionValidity {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  agentid: number;  // Required
  validfrom: Date;  // Required
  validto: Date;  // Required
  remarks: string;  // Required
  seasonid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAgentCommissionValidity {
  hotelid: number;
  agentid: number;
  validfrom: Date;
  validto: Date;
  remarks: string;
  seasonid?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
