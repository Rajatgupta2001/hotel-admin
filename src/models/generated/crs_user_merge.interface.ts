/**
 * CrsUserMerge Model Interfaces
 * Database table: crsUserMerge
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsUserMerge {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  linkedhotelid?: number;
  linkedrefid?: number;
  tablename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateCrsUserMerge {
  compid?: number;
  userid?: number;
  linkedhotelid?: number;
  linkedrefid?: number;
  tablename?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsUserMerge {
  compid?: number;
  userid?: number;
  linkedhotelid?: number;
  linkedrefid?: number;
  tablename?: string;
  createdby?: number;
}
