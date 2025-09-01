/**
 * ChannelAllotments Model
 * Database table: channelallotments
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IChannelAllotments {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdstype?: string;
  roomtypecode?: string;
  startdate?: Date;
  enddate?: Date;
  allotments?: number;
  sendon?: Date;
  createdon?: Date;  // Auto-populated timestamp
  updatestatus?: string;
  updatecode?: number;
  messageid?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateChannelAllotments {
  hotelid?: number;
  gdstype?: string;
  roomtypecode?: string;
  startdate?: Date;
  enddate?: Date;
  allotments?: number;
  sendon?: Date;
  updatestatus?: string;
  updatecode?: number;
  messageid?: string;
}
export interface IUpdateChannelAllotments {
  hotelid?: number;
  gdstype?: string;
  roomtypecode?: string;
  startdate?: Date;
  enddate?: Date;
  allotments?: number;
  sendon?: Date;
  updatestatus?: string;
  updatecode?: number;
  messageid?: string;
}