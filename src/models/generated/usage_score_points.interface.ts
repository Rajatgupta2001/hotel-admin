/**
 * UsageScorePoints Model Interfaces
 * Database table: usageScorePoints
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUsageScorePoints {
  id?: number;  // Primary key - auto-generated
  key: string;  // Required
  groupid?: number;  // Default: 0
  grouppointid?: number;  // Default: 0
  module: string;  // Required
  controller: string;  // Required
  action: string;  // Required
  params?: string;
  desc?: string;
  points?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateUsageScorePoints {
  key: string;
  groupid?: number;
  grouppointid?: number;
  module: string;
  controller: string;
  action: string;
  params?: string;
  desc?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUsageScorePoints {
  key?: string;
  groupid?: number;
  grouppointid?: number;
  module?: string;
  controller?: string;
  action?: string;
  params?: string;
  desc?: string;
  points?: number;
  createdby?: number;
  modifiedby?: number;
}
