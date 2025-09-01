/**
 * CorpAgentLogin Model Interfaces
 * Database table: corpAgentLogin
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpAgentLogin {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  username?: string;
  password?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;
  resetpassflag?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  corpagentuserid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateCorpAgentLogin {
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  username?: string;
  password?: string;
  createdby?: number;
  status?: string;
  resetpassflag?: string;
  modifiedby?: number;
  corpagentuserid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpAgentLogin {
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  username?: string;
  password?: string;
  createdby?: number;
  status?: string;
  resetpassflag?: string;
  modifiedby?: number;
  corpagentuserid?: number;
}
