/**
 * Errors Model Interfaces
 * Database table: errors
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IErrors {
  id?: string;  // Primary key - auto-generated
  code?: string;
  message?: string;
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateErrors {
  code?: string;
  message?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateErrors {
  code?: string;
  message?: string;
}
