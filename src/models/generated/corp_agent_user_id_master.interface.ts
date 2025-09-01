/**
 * CorpAgentUserIdMaster Model Interfaces
 * Database table: corpAgentUserIdMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpAgentUserIdMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  corpagentid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateCorpAgentUserIdMaster {
  hotelid?: number;
  compid?: number;
  corpagentid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpAgentUserIdMaster {
  hotelid?: number;
  compid?: number;
  corpagentid?: number;
}
