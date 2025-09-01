/**
 * AgentAppCommHistory Model Interfaces
 * Database table: agentAppCommHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentAppCommHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  agentid: number;  // Required
  validfromday: number;  // Required
  validfrommonth: number;  // Required
  validtoday: number;  // Required
  validtomonth: number;  // Required
  commission: number;  // Required
  commisssiontype: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: Date;  // User ID reference
  status: string;  // Required
  effectivedate: Date;  // Required
}

// Create interface - for new entity creation
export interface ICreateAgentAppCommHistory {
  hotelid: number;
  agentid: number;
  validfromday: number;
  validfrommonth: number;
  validtoday: number;
  validtomonth: number;
  commission: number;
  commisssiontype: string;
  modifiedby?: Date;
  status: string;
  effectivedate: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAgentAppCommHistory {
  hotelid?: number;
  agentid?: number;
  validfromday?: number;
  validfrommonth?: number;
  validtoday?: number;
  validtomonth?: number;
  commission?: number;
  commisssiontype?: string;
  modifiedby?: Date;
  status?: string;
  effectivedate?: Date;
}
