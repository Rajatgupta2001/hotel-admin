/**
 * GroupScheduler Model Interfaces
 * Database table: groupScheduler
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGroupScheduler {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: 0
  compid?: number;  // Primary key - auto-generated
  title?: string;
  email?: string;
  emailtitle?: string;
  emailsubject?: string;
  scheduletype?: string;
  scheduletime?: string;
  status?: string;
  module?: string;  // Default: text("'HR'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGroupScheduler {
  hotelid?: number;
  title?: string;
  email?: string;
  emailtitle?: string;
  emailsubject?: string;
  scheduletype?: string;
  scheduletime?: string;
  status?: string;
  module?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGroupScheduler {
  hotelid?: number;
  title?: string;
  email?: string;
  emailtitle?: string;
  emailsubject?: string;
  scheduletype?: string;
  scheduletime?: string;
  status?: string;
  module?: string;
  createdby?: number;
  modifiedby?: number;
}
