/**
 * AgentCityLedger Model
 * Database table: agentcityledger
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
  ispaid?: number;
}

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