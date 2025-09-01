/**
 * AgentCityLedger Model Interfaces
 * Database table: agentCityLedger
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAgentCityLedger {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  agentid?: number;
  rsvid?: number;
  groupid?: number;
  folio?: string;
  posinvoiceid?: number;
  posid?: number;
  amount?: number;
  effectivedate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  ispaid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateAgentCityLedger {
  hotelid?: number;
  agentid?: number;
  rsvid?: number;
  groupid?: number;
  folio?: string;
  posinvoiceid?: number;
  posid?: number;
  amount?: number;
  effectivedate?: Date;
  createdby?: number;
  modifiedby?: number;
  ispaid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAgentCityLedger {
  hotelid?: number;
  agentid?: number;
  rsvid?: number;
  groupid?: number;
  folio?: string;
  posinvoiceid?: number;
  posid?: number;
  amount?: number;
  effectivedate?: Date;
  createdby?: number;
  modifiedby?: number;
  ispaid?: number;
}
