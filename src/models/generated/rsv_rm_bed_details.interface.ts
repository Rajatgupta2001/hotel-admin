/**
 * RsvRmBedDetails Model Interfaces
 * Database table: rsvRmBedDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmBedDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noofbeds?: number;
  fromdate?: Date;
  todate?: Date;
  totalamount?: number;  // Default: text("'0.000000'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  counterid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvRmBedDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noofbeds?: number;
  fromdate?: Date;
  todate?: Date;
  totalamount?: number;
  createdby?: number;
  counterid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRmBedDetails {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  noofbeds?: number;
  fromdate?: Date;
  todate?: Date;
  totalamount?: number;
  createdby?: number;
  counterid?: number;
}
