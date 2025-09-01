/**
 * UsageScorePoints Model
 * Database table: usagescorepoints
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUsageScorePoints {
  id?: number;  // Primary key - auto-generated
  key?: string;
  groupid?: number;
  grouppointid?: number;
  module?: string;
  controller?: string;
  action?: string;
  params?: string;
  desc?: string;
  points?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateUsageScorePoints {
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