/**
 * RsvBookingTracker Model Interfaces
 * Database table: rsvBookingTracker
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  ispaid?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
