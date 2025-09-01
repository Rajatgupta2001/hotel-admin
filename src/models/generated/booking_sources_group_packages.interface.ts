/**
 * BookingSourcesGroupPackages Model Interfaces
 * Database table: bookingSourcesGroupPackages
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBookingSourcesGroupPackages {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  groupid: number;  // Required
  pkgid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateBookingSourcesGroupPackages {
  hotelid: number;
  groupid: number;
  pkgid: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBookingSourcesGroupPackages {
  hotelid?: number;
  groupid?: number;
  pkgid?: number;
  createdby?: number;
}
