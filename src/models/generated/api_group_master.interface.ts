/**
 * ApiGroupMaster Model Interfaces
 * Database table: apiGroupMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IApiGroupMaster {
  id?: string;  // Primary key - auto-generated
  name: string;  // Required
  type?: string;  // Default: text("'external'"
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateApiGroupMaster {
  name: string;
  type?: string;
  createdby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateApiGroupMaster {
  name?: string;
  type?: string;
  createdby?: number;
  status?: string;
}
