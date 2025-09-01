/**
 * BookingSourcesGroupPackages Model
 * Database table: bookingsourcesgrouppackages
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBookingSourcesGroupPackages {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  pkgid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateBookingSourcesGroupPackages {
  hotelid?: number;
  groupid?: number;
  pkgid?: number;
  createdby?: number;
}
export interface IUpdateBookingSourcesGroupPackages {
  hotelid?: number;
  groupid?: number;
  pkgid?: number;
  createdby?: number;
}