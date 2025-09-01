/**
 * NewHotelRequests Model Interfaces
 * Database table: newHotelRequests
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface INewHotelRequests {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  userid?: number;
  verificationcode?: string;
  newhotelid?: number;
  status?: number;
  createdon?: Date;  // Auto-populated timestamp
  expiredon?: Date;
}

// Create interface - for new entity creation
export interface ICreateNewHotelRequests {
  compid?: number;
  hotelid?: number;
  userid?: number;
  verificationcode?: string;
  newhotelid?: number;
  status?: number;
  expiredon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateNewHotelRequests {
  compid?: number;
  hotelid?: number;
  userid?: number;
  verificationcode?: string;
  newhotelid?: number;
  status?: number;
  expiredon?: Date;
}
