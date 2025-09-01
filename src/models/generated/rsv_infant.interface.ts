/**
 * RsvInfant Model Interfaces
 * Database table: rsvInfant
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvInfant {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  rsvrmid: number;  // Required
  guestid?: number;
  rsvrmguestid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  infantid?: number;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRsvInfant {
  hotelid: number;
  rsvid: number;
  rsvrmid: number;
  guestid?: number;
  rsvrmguestid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  infantid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
