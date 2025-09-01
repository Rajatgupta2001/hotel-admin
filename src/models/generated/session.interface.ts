/**
 * Session Model Interfaces
 * Database table: session
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISession {
  id?: string;  // Primary key - auto-generated
  modified?: number;
  lifetime?: number;
  data?: string;
}

// Create interface - for new entity creation
export interface ICreateSession {
  modified?: number;
  lifetime?: number;
  data?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSession {
  modified?: number;
  lifetime?: number;
  data?: string;
}
