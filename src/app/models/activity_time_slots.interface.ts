/**
 * ActivityTimeSlots Model
 * Database table: activitytimeslots
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IActivityTimeSlots {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  seasonid?: number;
  title?: string;
  starttime?: string;
  endtime?: string;
  duration?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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