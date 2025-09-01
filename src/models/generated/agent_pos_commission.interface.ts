/**
 * AgentPosCommission Model Interfaces
 * Database table: agentPosCommission
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentPosCommission {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  pospointid?: number;
  commissionper?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAgentPosCommission {
  hotelid?: number;
  agentid?: number;
  pospointid?: number;
  commissionper?: number;
  createdby?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAgentPosCommission {
  hotelid?: number;
  agentid?: number;
  pospointid?: number;
  commissionper?: number;
  createdby?: Date;
}
