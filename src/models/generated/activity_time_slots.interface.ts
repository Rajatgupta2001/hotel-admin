/**
 * ActivityTimeSlots Model Interfaces
 * Database table: activityTimeSlots
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IActivityTimeSlots {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  seasonid?: number;
  title?: string;
  starttime?: string;  // Default: text("'00:00:00'"
  endtime?: string;  // Default: text("'00:00:00'"
  duration?: number;  // Default: 0
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateActivityTimeSlots {
  hotelid?: number;
  seasonid?: number;
  title?: string;
  starttime?: string;
  endtime?: string;
  duration?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateActivityTimeSlots {
  hotelid?: number;
  seasonid?: number;
  title?: string;
  starttime?: string;
  endtime?: string;
  duration?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
