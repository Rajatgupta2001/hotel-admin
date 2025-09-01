/**
 * ScoreGroupPoint Model Interfaces
 * Database table: scoreGroupPoint
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IScoreGroupPoint {
  id?: number;  // Primary key - auto-generated
  name?: string;
  points?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateScoreGroupPoint {
  name?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateScoreGroupPoint {
  name?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}
