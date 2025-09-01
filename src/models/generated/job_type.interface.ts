/**
 * JobType Model Interfaces
 * Database table: jobType
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IJobType {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  workareaid?: number;  // Default: text("'-11'"
  title: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateJobType {
  hotelid: number;
  workareaid?: number;
  title: string;
  description: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateJobType {
  hotelid?: number;
  workareaid?: number;
  title?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
