/**
 * RsvRmGuest Model Interfaces
 * Database table: rsvRmGuests
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmGuest {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  roomid?: number;  // Default: 0
  rsvrmid?: number;
  guestid?: number;
  chargesharer?: number;  // Default: 0
  checkindate?: Date;
  checkoutdate?: Date;
  checkindatetime?: Date;
  checkoutdatetime?: Date;
  status?: string;  // Default: 'RESERVE'
  isowner?: number;  // Default: 1
  persontype?: string;  // Default: 'Adult'
  counterid?: number;
  foliono?: string;
  lasttranspaiddate?: Date;
  lasttransid?: number;  // Default: 0
  signature?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  modifiedby?: string;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
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
  status?: string;
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
}

// Update interface - for entity updates (all fields optional)
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
  status?: string;
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
}
