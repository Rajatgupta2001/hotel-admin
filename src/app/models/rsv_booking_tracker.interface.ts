/**
 * RsvBookingTracker Model
 * Database table: rsvbookingtracker
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvBookingTracker {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  groupid?: string;
  rsvid?: string;
  tariffid?: string;
  bookingpolicyid?: number;
  bookingpolicyamount?: number;
  bookingpolicyhrs?: number;
  duedate?: Date;
  ispaid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRsvBookingTracker {
  hotelid?: string;
  groupid?: string;
  rsvid?: string;
  tariffid?: string;
  bookingpolicyid?: number;
  bookingpolicyamount?: number;
  bookingpolicyhrs?: number;
  duedate?: Date;
  ispaid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateRsvBookingTracker {
  hotelid?: string;
  groupid?: string;
  rsvid?: string;
  tariffid?: string;
  bookingpolicyid?: number;
  bookingpolicyamount?: number;
  bookingpolicyhrs?: number;
  duedate?: Date;
  ispaid?: number;
  createdby?: number;
  modifiedby?: number;
}