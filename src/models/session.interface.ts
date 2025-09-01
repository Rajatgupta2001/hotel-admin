/**
 * Session Model
 * Database table: session
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISession {
  id?: string;  // Primary key - auto-generated
  modified?: number;
  lifetime?: number;
  data?: string;
}

export interface ICreateSession {
  modified?: number;
  lifetime?: number;
  data?: string;
}
export interface IUpdateSession {
  modified?: number;
  lifetime?: number;
  data?: string;
}