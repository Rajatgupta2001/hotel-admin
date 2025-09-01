/**
 * CorpAgentUsers Model Interfaces
 * Database table: corpAgentUsers
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpAgentUsers {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  usertype?: string;  // Default: text("'l'"
  gid?: string;
  refid?: number;
  reftype?: string;
  regnumber?: string;
  codeno: string;  // Required
  logo: string;  // Required
  businessname: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateCorpAgentUsers {
  hotelid?: number;
  compid?: number;
  usertype?: string;
  gid?: string;
  refid?: number;
  reftype?: string;
  regnumber?: string;
  codeno: string;
  logo: string;
  businessname: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpAgentUsers {
  hotelid?: number;
  compid?: number;
  usertype?: string;
  gid?: string;
  refid?: number;
  reftype?: string;
  regnumber?: string;
  codeno?: string;
  logo?: string;
  businessname?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
