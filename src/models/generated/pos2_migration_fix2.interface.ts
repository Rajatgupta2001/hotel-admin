/**
 * Pos2MigrationFix2 Model Interfaces
 * Database table: pos2MigrationFix2
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2MigrationFix2 {
  hotelId?: number;
  posPointId?: number;
  invoiceId?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2MigrationFix2 {
  hotelId?: number;
  posPointId?: number;
  invoiceId?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2MigrationFix2 {
  hotelId?: number;
  posPointId?: number;
  invoiceId?: number;
}
