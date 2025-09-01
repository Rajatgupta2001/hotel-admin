/**
 * BookingCharges Model
 * Database table: bookingcharges
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBookingCharges {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  bookingbforduration?: number;
  durationtype?: string;
  bookingchargetype?: string;
  charge?: number;
  chargetype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  isdefault?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBookingCharges {
  hotelid?: number;
  title?: string;
  bookingbforduration?: number;
  durationtype?: string;
  bookingchargetype?: string;
  charge?: number;
  chargetype?: string;
  createdby?: number;
  status?: string;
  isdefault?: number;
  modifiedby?: number;
}
export interface IUpdateBookingCharges {
  hotelid?: number;
  title?: string;
  bookingbforduration?: number;
  durationtype?: string;
  bookingchargetype?: string;
  charge?: number;
  chargetype?: string;
  createdby?: number;
  status?: string;
  isdefault?: number;
  modifiedby?: number;
}