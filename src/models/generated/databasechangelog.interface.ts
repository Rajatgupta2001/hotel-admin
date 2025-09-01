/**
 * Databasechangelog Model Interfaces
 * Database table: DATABASECHANGELOG
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDatabasechangelog {
  id?: string;  // Primary key - auto-generated
  author?: string;  // Primary key - auto-generated
  filename?: string;  // Primary key - auto-generated
  dateexecuted: Date;  // Required
  orderexecuted: number;  // Required
  exectype: string;  // Required
  md5sum?: string;
  description?: string;
  comments?: string;
  tag?: string;
  liquibase?: string;
}

// Create interface - for new entity creation
export interface ICreateDatabasechangelog {
  dateexecuted: Date;
  orderexecuted: number;
  exectype: string;
  md5sum?: string;
  description?: string;
  comments?: string;
  tag?: string;
  liquibase?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDatabasechangelog {
  dateexecuted?: Date;
  orderexecuted?: number;
  exectype?: string;
  md5sum?: string;
  description?: string;
  comments?: string;
  tag?: string;
  liquibase?: string;
}
