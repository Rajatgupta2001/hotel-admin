/**
 * EventScheduler Model Interfaces
 * Database table: eventScheduler
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IEventScheduler {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: 0
  compid?: number;  // Primary key - auto-generated
  evntkey?: string;
  scrpid?: number;
  valuejson?: string;
  scheduletype?: string;
  scheduletime?: string;
  grpschedulerid?: number;  // Default: 0
  status?: string;  // Default: 'A'
  module?: string;  // Default: text("'HR'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateEventScheduler {
  hotelid?: number;
  evntkey?: string;
  scrpid?: number;
  valuejson?: string;
  scheduletype?: string;
  scheduletime?: string;
  grpschedulerid?: number;
  status?: string;
  module?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateEventScheduler {
  hotelid?: number;
  evntkey?: string;
  scrpid?: number;
  valuejson?: string;
  scheduletype?: string;
  scheduletime?: string;
  grpschedulerid?: number;
  status?: string;
  module?: string;
  createdby?: number;
  modifiedby?: number;
}
