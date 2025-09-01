/**
 * Pos2MigrationFix Model
 * Database table: pos2migrationfix
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2MigrationFix {
  hotelId?: number;
  id?: number;  // Primary key - auto-generated
  posId?: number;
}

export interface ICreatePos2MigrationFix {
  hotelId?: number;
  posId?: number;
}
export interface IUpdatePos2MigrationFix {
  hotelId?: number;
  posId?: number;
}