/**
 * StopPosPosting Model
 * Database table: stopposposting
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IStopPosPosting {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  posid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateStopPosPosting {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  posid?: number;
  createdby?: number;
}
export interface IUpdateStopPosPosting {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  posid?: number;
  createdby?: number;
}