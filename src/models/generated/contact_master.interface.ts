/**
 * ContactMaster Model Interfaces
 * Database table: contactMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IContactMaster {
  id?: number;  // Primary key - auto-generated
  title: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateContactMaster {
  title: string;
  description: string;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateContactMaster {
  title?: string;
  description?: string;
  status?: string;
  modifiedby?: number;
}
