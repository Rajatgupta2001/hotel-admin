/**
 * Pos2MigrateStatus Model Interfaces
 * Database table: pos2MigrateStatus
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2MigrateStatus {
  hotelid?: number;  // Primary key - auto-generated
  status?: string;
  startTime?: string;
  endTime?: string;
}

// Create interface - for new entity creation
export interface ICreatePos2MigrateStatus {
  status?: string;
  startTime?: string;
  endTime?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2MigrateStatus {
  status?: string;
  startTime?: string;
  endTime?: string;
}
