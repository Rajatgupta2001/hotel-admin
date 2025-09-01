/**
 * EventMaster Model Interfaces
 * Database table: eventMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IEventMaster {
  key?: string;  // Primary key - auto-generated
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}

// Create interface - for new entity creation
export interface ICreateEventMaster {
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateEventMaster {
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}
