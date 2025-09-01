/**
 * AgentIdMaster Model Interfaces
 * Database table: agentIdMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentIdMaster {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  agentid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateAgentIdMaster {
  compid?: number;
  hotelid?: number;
  agentid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAgentIdMaster {
  compid?: number;
  hotelid?: number;
  agentid?: number;
}
