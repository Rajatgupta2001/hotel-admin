/**
 * RsvRoomsBack12Feb Model
 * Database table: rsvroomsback12feb
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRoomsBack12Feb {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  infants?: number;
  temprsvrmid?: number;
  value1?: string;
  value2?: string;
}

export interface ICreateRsvRoomsBack12Feb {
  hotelid?: number;
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
export interface IUpdateRsvRoomsBack12Feb {
  hotelid?: number;
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