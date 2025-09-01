/**
 * GidMaster Model Interfaces
 * Database table: gidMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGidMaster {
  id?: number;  // Primary key - auto-generated
  companyid?: number;
  gid?: number;
  tablename?: string;  // Default: text("'NULL'"
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateGidMaster {
  companyid?: number;
  gid?: number;
  tablename?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGidMaster {
  companyid?: number;
  gid?: number;
  tablename?: string;
}
