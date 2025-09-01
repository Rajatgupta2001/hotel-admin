/**
 * IndentityTypesList Model Interfaces
 * Database table: indentityTypesList
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IIndentityTypesList {
  id?: number;  // Primary key - auto-generated
  title: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateIndentityTypesList {
  title: string;
  description: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateIndentityTypesList {
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
