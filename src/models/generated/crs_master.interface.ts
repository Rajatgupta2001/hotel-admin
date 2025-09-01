/**
 * CrsMaster Model Interfaces
 * Database table: crsMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsMaster {
  id?: string;  // Primary key - auto-generated
  name: string;  // Required
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  type?: string;  // Default: text("'HOTEL'"
  username?: string;
  password?: string;
  refcrsid?: number;
}

// Create interface - for new entity creation
export interface ICreateCrsMaster {
  name: string;
  status?: string;
  type?: string;
  username?: string;
  password?: string;
  refcrsid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsMaster {
  name?: string;
  status?: string;
  type?: string;
  username?: string;
  password?: string;
  refcrsid?: number;
}
