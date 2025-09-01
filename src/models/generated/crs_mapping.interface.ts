/**
 * CrsMapping Model Interfaces
 * Database table: crsMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsMapping {
  id?: string;  // Primary key - auto-generated
  crsid: number;  // Required
  apiid: number;  // Required
  refid: number;  // Required
  reftype?: string;  // Default: text("'HOTEL'"
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateCrsMapping {
  crsid: number;
  apiid: number;
  refid: number;
  reftype?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsMapping {
  crsid?: number;
  apiid?: number;
  refid?: number;
  reftype?: string;
  status?: string;
}
