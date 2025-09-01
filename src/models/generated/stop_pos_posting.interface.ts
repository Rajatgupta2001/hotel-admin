/**
 * StopPosPosting Model Interfaces
 * Database table: stopPosPosting
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IStopPosPosting {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid?: number;
  groupid?: number;
  posid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateStopPosPosting {
  hotelid: number;
  rsvid?: number;
  groupid?: number;
  posid: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateStopPosPosting {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  posid?: number;
  createdby?: number;
}
