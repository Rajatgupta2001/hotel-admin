import type { IReservation } from './reservations.interface';
/**
 * RsvRmGuest Model
 * Database table: rsvrmguest
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmGuest {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  roomid?: number;
  rsvrmid?: number;
  guestid?: number;
  chargesharer?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  status?: Date;
  isowner?: number;
  persontype?: string;
  counterid?: number;
  foliono?: string;
  lasttranspaiddate?: Date;
  lasttransid?: number;
  signature?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  modifiedby?: string;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  reservation?: IReservation;
}

export interface ICreateRsvRmGuest {
  hotelid?: number;
  rsvid?: number;
  roomid?: number;
  rsvrmid?: number;
  guestid?: number;
  chargesharer?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  status?: Date;
  isowner?: number;
  persontype?: string;
  counterid?: number;
  foliono?: string;
  lasttranspaiddate?: Date;
  lasttransid?: number;
  signature?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  createdby?: string;
  modifiedby?: string;
  reservation?: IReservation;
}
export interface IUpdateRsvRmGuest {
  hotelid?: number;
  rsvid?: number;
  roomid?: number;
  rsvrmid?: number;
  guestid?: number;
  chargesharer?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  status?: Date;
  isowner?: number;
  persontype?: string;
  counterid?: number;
  foliono?: string;
  lasttranspaiddate?: Date;
  lasttransid?: number;
  signature?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  createdby?: string;
  modifiedby?: string;
  reservation?: IReservation;
}