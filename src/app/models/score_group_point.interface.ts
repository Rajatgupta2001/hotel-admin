/**
 * ScoreGroupPoint Model
 * Database table: scoregrouppoint
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IScoreGroupPoint {
  id?: number;  // Primary key - auto-generated
  name?: string;
  points?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateScoreGroupPoint {
  name?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateScoreGroupPoint {
  name?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}