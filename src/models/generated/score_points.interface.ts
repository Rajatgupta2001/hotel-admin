/**
 * ScorePoints Model Interfaces
 * Database table: scorePoints
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IScorePoints {
  key?: string;  // Primary key - auto-generated
  groupid?: number;  // Default: 0
  grouppointid?: number;  // Default: 0
  name?: string;
  desc?: string;
  points?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateScorePoints {
  groupid?: number;
  grouppointid?: number;
  name?: string;
  desc?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateScorePoints {
  groupid?: number;
  grouppointid?: number;
  name?: string;
  desc?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}
