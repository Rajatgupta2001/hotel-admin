/**
 * ScoreGroup Model Interfaces
 * Database table: scoreGroup
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IScoreGroup {
  id?: number;  // Primary key - auto-generated
  name?: string;
  code?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateScoreGroup {
  name?: string;
  code?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateScoreGroup {
  name?: string;
  code?: string;
  createdby?: number;
  modifiedby?: number;
}
