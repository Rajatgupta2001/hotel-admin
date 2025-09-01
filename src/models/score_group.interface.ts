/**
 * ScoreGroup Model
 * Database table: scoregroup
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IScoreGroup {
  id?: number;  // Primary key - auto-generated
  name?: string;
  code?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateScoreGroup {
  name?: string;
  code?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateScoreGroup {
  name?: string;
  code?: string;
  createdby?: number;
  modifiedby?: number;
}