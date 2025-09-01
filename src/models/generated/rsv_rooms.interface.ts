/**
 * RsvRooms Model Interfaces
 * Database table: rsvRooms
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRooms {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid?: number;
  roomid?: number;
  rmtype?: number;
  mroomid?: number;
  mrmtypeid?: number;
  checkindate: Date;  // Required
  checkoutdate: Date;  // Required
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  adults: number;  // Required
  children?: number;  // Default: 0
  xrabed?: number;  // Default: 0
  issplitted?: number;  // Default: 0
  splittedfrom?: number;
  rmrsvstatus?: string;
  cncldescription?: string;
  cnclreason?: number;
  cncldetails?: number;
  isassigned?: number;
  infants?: number;
  temprsvrmid?: number;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  modifiedby?: string;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateRsvRooms {
  hotelid: number;
  rsvid?: number;
  roomid?: number;
  rmtype?: number;
  mroomid?: number;
  mrmtypeid?: number;
  checkindate: Date;
  checkoutdate: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  adults: number;
  children?: number;
  xrabed?: number;
  issplitted?: number;
  splittedfrom?: number;
  rmrsvstatus?: string;
  cncldescription?: string;
  cnclreason?: number;
  cncldetails?: number;
  isassigned?: number;
  infants?: number;
  temprsvrmid?: number;
  createdby?: string;
  modifiedby?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRooms {
  hotelid?: number;
  rsvid?: number;
  roomid?: number;
  rmtype?: number;
  mroomid?: number;
  mrmtypeid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  adults?: number;
  children?: number;
  xrabed?: number;
  issplitted?: number;
  splittedfrom?: number;
  rmrsvstatus?: string;
  cncldescription?: string;
  cnclreason?: number;
  cncldetails?: number;
  isassigned?: number;
  infants?: number;
  temprsvrmid?: number;
  createdby?: string;
  modifiedby?: string;
}
