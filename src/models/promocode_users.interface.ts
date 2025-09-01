/**
 * PromocodeUsers Model
 * Database table: promocodeusers
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPromocodeUsers {
  hotelid?: number;
  couponid?: number;
  userid?: number;
  usertype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePromocodeUsers {
  hotelid?: number;
  couponid?: number;
  userid?: number;
  usertype?: string;
  createdby?: number;
}
export interface IUpdatePromocodeUsers {
  hotelid?: number;
  couponid?: number;
  userid?: number;
  usertype?: string;
  createdby?: number;
}