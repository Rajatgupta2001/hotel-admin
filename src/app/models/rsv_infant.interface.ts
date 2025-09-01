/**
 * RsvInfant Model
 * Database table: rsvinfant
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvInfant {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  guestid?: number;
  rsvrmguestid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  infantid?: number;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRsvInfant {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  guestid?: number;
  rsvrmguestid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  infantid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateRsvInfant {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  guestid?: number;
  rsvrmguestid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  infantid?: number;
  createdby?: number;
  modifiedby?: number;
}