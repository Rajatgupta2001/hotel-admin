/**
 * PromocodeEmailTracking Model Interfaces
 * Database table: promocodeEmailTracking
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPromocodeEmailTracking {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  couponid: number;  // Required
  userid?: number;
  usertype?: string;
  email?: string;
  fname?: string;
  lname?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePromocodeEmailTracking {
  hotelid: number;
  couponid: number;
  userid?: number;
  usertype?: string;
  email?: string;
  fname?: string;
  lname?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePromocodeEmailTracking {
  hotelid?: number;
  couponid?: number;
  userid?: number;
  usertype?: string;
  email?: string;
  fname?: string;
  lname?: string;
  createdby?: number;
}
