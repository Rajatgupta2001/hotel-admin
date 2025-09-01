/**
 * Errors Model
 * Database table: errors
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IErrors {
  id?: string;  // Primary key - auto-generated
  code?: string;
  message?: string;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateErrors {
  code?: string;
  message?: string;
}
export interface IUpdateErrors {
  code?: string;
  message?: string;
}