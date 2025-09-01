/**
 * Databasechangeloglock Model Interfaces
 * Database table: DATABASECHANGELOGLOCK
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDatabasechangeloglock {
  id?: number;  // Primary key - auto-generated
  locked: number;  // Required
  lockgranted?: Date;
  lockedby?: string;
}

// Create interface - for new entity creation
export interface ICreateDatabasechangeloglock {
  locked: number;
  lockgranted?: Date;
  lockedby?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDatabasechangeloglock {
  locked?: number;
  lockgranted?: Date;
  lockedby?: string;
}
