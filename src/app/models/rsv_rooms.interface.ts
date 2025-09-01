/**
 * RsvRooms Model
 * Database table: rsvrooms
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IReservation } from './reservations.interface';
import { IRooms } from './rooms.interface';
import { IRoomTypes } from './room_types.interface';

export interface IRsvRooms {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  createdby?: string;  // User ID reference
  modifiedby?: string;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  reservation?: IReservation;
  room?: IRooms;
  roomType?: IRoomTypes;
}

export interface ICreateRsvRooms {
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
  reservation?: IReservation;
  room?: IRooms;
  roomType?: IRoomTypes;
}
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
  reservation?: IReservation;
  room?: IRooms;
  roomType?: IRoomTypes;
}