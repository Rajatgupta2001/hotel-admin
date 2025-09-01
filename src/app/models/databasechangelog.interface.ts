/**
 * Databasechangelog Model
 * Database table: databasechangelog
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDatabasechangelog {
  id?: string;  // Primary key - auto-generated
  author?: string;
  filename?: string;
  dateexecuted: Date;  // Required
  orderexecuted: number;  // Required
  exectype?: string;
  md5sum?: string;
  description?: string;
  comments?: string;
  tag?: string;
  liquibase?: string;
}

export interface ICreateDatabasechangelog {
  author?: string;
  filename?: string;
  dateexecuted: Date;
  orderexecuted: number;
  exectype?: string;
  md5sum?: string;
  description?: string;
  comments?: string;
  tag?: string;
  liquibase?: string;
}
export interface IUpdateDatabasechangelog {
  author?: string;
  filename?: string;
  dateexecuted?: Date;
  orderexecuted?: number;
  exectype?: string;
  md5sum?: string;
  description?: string;
  comments?: string;
  tag?: string;
  liquibase?: string;
}