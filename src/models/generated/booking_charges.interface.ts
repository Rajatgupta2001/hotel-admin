/**
 * BookingCharges Model Interfaces
 * Database table: bookingCharges
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBookingCharges {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  bookingbforduration?: number;  // Default: 0
  durationtype?: string;
  bookingchargetype?: string;
  charge?: number;  // Default: 0
  chargetype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  isdefault?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBookingCharges {
  hotelid: number;
  title?: string;
  bookingbforduration?: number;
  durationtype?: string;
  bookingchargetype?: string;
  charge?: number;
  chargetype?: string;
  createdby?: number;
  status: string;
  isdefault?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
