/**
 * GuestIdMaster Model
 * Database table: guestidmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestIdMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  guestid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateGuestIdMaster {
  hotelid?: number;
  guestid?: number;
}
export interface IUpdateGuestIdMaster {
  hotelid?: number;
  guestid?: number;
}