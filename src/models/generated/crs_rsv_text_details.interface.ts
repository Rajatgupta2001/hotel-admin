/**
 * CrsRsvTextDetails Model Interfaces
 * Database table: crsRsvTextDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsRsvTextDetails {
  id?: number;  // Primary key - auto-generated
  apiid?: number;
  textkey?: string;
  textvalue?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateCrsRsvTextDetails {
  apiid?: number;
  textkey?: string;
  textvalue?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsRsvTextDetails {
  apiid?: number;
  textkey?: string;
  textvalue?: string;
  createdby?: number;
  modifiedby?: number;
}
