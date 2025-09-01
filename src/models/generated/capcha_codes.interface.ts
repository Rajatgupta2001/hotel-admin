/**
 * CapchaCodes Model Interfaces
 * Database table: capchaCodes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICapchaCodes {
  id?: number;  // Primary key - auto-generated
  sessionid?: string;
  capchacode?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateCapchaCodes {
  sessionid?: string;
  capchacode?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCapchaCodes {
  sessionid?: string;
  capchacode?: string;
}
