/**
 * CCtypes Model Interfaces
 * Database table: cCTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICCtypes {
  id?: number;  // Primary key - auto-generated
  title?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCCtypes {
  title?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCCtypes {
  title?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
