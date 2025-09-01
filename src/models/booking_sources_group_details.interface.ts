/**
 * BookingSourcesGroupDetails Model
 * Database table: bookingsourcesgroupdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBookingSourcesGroupDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  refid?: number;
  reftype?: string;
  gdstravelagent?: number;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBookingSourcesGroupDetails {
  hotelid?: number;
  groupid?: number;
  refid?: number;
  reftype?: string;
  gdstravelagent?: number;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateBookingSourcesGroupDetails {
  hotelid?: number;
  groupid?: number;
  refid?: number;
  reftype?: string;
  gdstravelagent?: number;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}