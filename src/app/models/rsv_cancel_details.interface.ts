/**
 * RsvCancelDetails Model
 * Database table: rsvcanceldetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvCancelDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  checkintime?: string;
  checkouttime?: string;
  rmtypeid?: number;
  fromroom?: number;
  toroom?: number;
  rsvstatus?: string;
}

export interface ICreateRsvCancelDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  checkintime?: string;
  checkouttime?: string;
  rmtypeid?: number;
  fromroom?: number;
  toroom?: number;
  rsvstatus?: string;
}
export interface IUpdateRsvCancelDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  checkintime?: string;
  checkouttime?: string;
  rmtypeid?: number;
  fromroom?: number;
  toroom?: number;
  rsvstatus?: string;
}