/**
 * Universal Model Interfaces
 * Database table: universal
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUniversal {
  id?: string;  // Primary key - auto-generated
  name: string;  // Required
  val: string;  // Required
  created: Date;  // Required
  updated: Date;  // Required
}

// Create interface - for new entity creation
export interface ICreateUniversal {
  name: string;
  val: string;
  created: Date;
  updated: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUniversal {
  name?: string;
  val?: string;
  created?: Date;
  updated?: Date;
}
