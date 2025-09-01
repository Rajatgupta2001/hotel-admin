/**
 * CorpAgentSalesPersons Model Interfaces
 * Database table: corpAgentSalesPersons
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpAgentSalesPersons {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  corptaid: number;  // Required
  type: string;  // Required
  userid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  isdefault?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateCorpAgentSalesPersons {
  hotelid: number;
  corptaid: number;
  type: string;
  userid: number;
  createdby?: number;
  isdefault?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpAgentSalesPersons {
  hotelid?: number;
  corptaid?: number;
  type?: string;
  userid?: number;
  createdby?: number;
  isdefault?: number;
}
