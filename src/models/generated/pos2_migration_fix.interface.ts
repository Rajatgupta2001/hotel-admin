/**
 * Pos2MigrationFix Model Interfaces
 * Database table: pos2MigrationFix
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2MigrationFix {
  hotelId?: number;
  id?: number;  // Primary key - auto-generated
  posId?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2MigrationFix {
  hotelId?: number;
  posId?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2MigrationFix {
  hotelId?: number;
  posId?: number;
}
