/**
 * EventScheduler Model
 * Database table: eventscheduler
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IEventScheduler {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  evntkey?: string;
  scrpid?: number;
  valuejson?: string;
  scheduletype?: string;
  scheduletime?: string;
  grpschedulerid?: number;
  status?: Date;
  module?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateEventScheduler {
  hotelid?: number;
  compid?: number;
  evntkey?: string;
  scrpid?: number;
  valuejson?: string;
  scheduletype?: string;
  scheduletime?: string;
  grpschedulerid?: number;
  status?: Date;
  module?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateEventScheduler {
  hotelid?: number;
  compid?: number;
  evntkey?: string;
  scrpid?: number;
  valuejson?: string;
  scheduletype?: string;
  scheduletime?: string;
  grpschedulerid?: number;
  status?: Date;
  module?: string;
  createdby?: number;
  modifiedby?: number;
}