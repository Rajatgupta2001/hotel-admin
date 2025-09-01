/**
 * RsvRoomsBack12Feb Model Interfaces
 * Database table: rsvRooms_back_12Feb
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRoomsBack12Feb {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  rsvid: number;  // Required
  roomid: number;  // Required
  rmtype: number;  // Required
  checkindate: Date;  // Required
  checkoutdate: Date;  // Required
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  adults: number;  // Required
  children: number;  // Required
  xrabed: number;  // Required
  issplitted: number;  // Required
  splittedfrom?: number;  // Default: 0
  rmrsvstatus: string;  // Required
  cncldescription?: string;
  cnclreason?: number;
  cncldetails?: number;  // Default: 0
  isassigned?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  infants?: number;  // Default: 0
  temprsvrmid?: number;
  value1?: string;
  value2?: string;
}

// Create interface - for new entity creation
export interface ICreateRsvRoomsBack12Feb {
  rsvid: number;
  roomid: number;
  rmtype: number;
  checkindate: Date;
  checkoutdate: Date;
  dayusechkindttime?: Date;
  dayusechkoutdttime?: Date;
  adults: number;
  children: number;
  xrabed: number;
  issplitted: number;
  splittedfrom?: number;
  rmrsvstatus: string;
  cncldescription?: string;
  cnclreason?: number;
  cncldetails?: number;
  isassigned?: number;
  createdby?: number;
  modifiedby?: number;
  infants?: number;
  temprsvrmid?: number;
  value1?: string;
  value2?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRoomsBack12Feb {
  rsvid?: number;
  roomid?: number;
  rmtype?: number;
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
  createdby?: number;
  modifiedby?: number;
  infants?: number;
  temprsvrmid?: number;
  value1?: string;
  value2?: string;
}
