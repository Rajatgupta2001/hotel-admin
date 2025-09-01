/**
 * BookingSourcesGroups Model
 * Database table: bookingsourcesgroups
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBookingSourcesGroups {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupname?: string;
  description?: string;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBookingSourcesGroups {
  hotelid?: number;
  groupname?: string;
  description?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateBookingSourcesGroups {
  hotelid?: number;
  groupname?: string;
  description?: string;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
}