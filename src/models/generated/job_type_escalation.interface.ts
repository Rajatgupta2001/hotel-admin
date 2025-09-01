/**
 * JobTypeEscalation Model Interfaces
 * Database table: jobTypeEscalation
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IJobTypeEscalation {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  jobtypeid: number;  // Required
  escalationlevel?: number;  // Default: 0
  tat?: number;  // Default: 0
  userid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateJobTypeEscalation {
  hotelid: number;
  jobtypeid: number;
  escalationlevel?: number;
  tat?: number;
  userid: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateJobTypeEscalation {
  hotelid?: number;
  jobtypeid?: number;
  escalationlevel?: number;
  tat?: number;
  userid?: number;
  createdby?: number;
  modifiedby?: number;
}
