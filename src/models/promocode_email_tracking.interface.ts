/**
 * PromocodeEmailTracking Model
 * Database table: promocodeemailtracking
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPromocodeEmailTracking {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  couponid?: number;
  userid?: number;
  usertype?: string;
  email?: string;
  fname?: string;
  lname?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePromocodeEmailTracking {
  hotelid?: number;
  couponid?: number;
  userid?: number;
  usertype?: string;
  email?: string;
  fname?: string;
  lname?: string;
  createdby?: number;
}
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