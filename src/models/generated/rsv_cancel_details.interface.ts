/**
 * RsvCancelDetails Model Interfaces
 * Database table: rsvCancelDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
