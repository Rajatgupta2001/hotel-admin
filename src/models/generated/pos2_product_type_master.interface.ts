/**
 * Pos2ProductTypeMaster Model Interfaces
 * Database table: pos2ProductTypeMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2ProductTypeMaster {
  id?: number;  // Primary key - auto-generated
  producttype?: number;  // Default: 0
  desc?: string;
  type?: string;
}

// Create interface - for new entity creation
export interface ICreatePos2ProductTypeMaster {
  producttype?: number;
  desc?: string;
  type?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2ProductTypeMaster {
  producttype?: number;
  desc?: string;
  type?: string;
}
