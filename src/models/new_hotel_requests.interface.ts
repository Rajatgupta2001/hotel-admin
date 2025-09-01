/**
 * NewHotelRequests Model
 * Database table: newhotelrequests
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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

export interface ICreateNewHotelRequests {
  compid?: number;
  hotelid?: number;
  userid?: number;
  verificationcode?: string;
  newhotelid?: number;
  status?: number;
  expiredon?: Date;
}
export interface IUpdateNewHotelRequests {
  compid?: number;
  hotelid?: number;
  userid?: number;
  verificationcode?: string;
  newhotelid?: number;
  status?: number;
  expiredon?: Date;
}