/**
 * Databasechangeloglock Model
 * Database table: databasechangeloglock
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDatabasechangeloglock {
  id?: number;  // Primary key - auto-generated
  locked: number;  // Required
  lockgranted?: Date;
  lockedby?: string;
}

export interface ICreateDatabasechangeloglock {
  locked: number;
  lockgranted?: Date;
  lockedby?: string;
}
export interface IUpdateDatabasechangeloglock {
  locked?: number;
  lockgranted?: Date;
  lockedby?: string;
}