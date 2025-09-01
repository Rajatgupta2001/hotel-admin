/**
 * ScorePoints Model
 * Database table: scorepoints
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IScorePoints {
  key?: string;
  groupid?: number;
  grouppointid?: number;
  name?: string;
  desc?: string;
  points?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateScorePoints {
  key?: string;
  groupid?: number;
  grouppointid?: number;
  name?: string;
  desc?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateScorePoints {
  key?: string;
  groupid?: number;
  grouppointid?: number;
  name?: string;
  desc?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}