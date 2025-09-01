/**
 * BookingSourcesGroups Model Interfaces
 * Database table: bookingSourcesGroups
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBookingSourcesGroups {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  groupname: string;  // Required
  description?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBookingSourcesGroups {
  hotelid: number;
  groupname: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBookingSourcesGroups {
  hotelid?: number;
  groupname?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
