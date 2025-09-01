/**
 * BookingSourcesGroupDetails Model Interfaces
 * Database table: bookingSourcesGroupDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBookingSourcesGroupDetails {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  groupid: number;  // Required
  refid: number;  // Required
  reftype: string;  // Required
  gdstravelagent?: number;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBookingSourcesGroupDetails {
  hotelid: number;
  groupid: number;
  refid: number;
  reftype: string;
  gdstravelagent?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBookingSourcesGroupDetails {
  hotelid?: number;
  groupid?: number;
  refid?: number;
  reftype?: string;
  gdstravelagent?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
