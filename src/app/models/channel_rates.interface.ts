/**
 * ChannelRates Model
 * Database table: channelrates
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IChannelRates {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdstype?: string;
  roomtypecode?: string;
  ratecode?: string;
  startdate?: Date;
  enddate?: Date;
  ratedetails?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatestatus?: string;
  messageid?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateChannelRates {
  hotelid?: number;
  gdstype?: string;
  roomtypecode?: string;
  ratecode?: string;
  startdate?: Date;
  enddate?: Date;
  ratedetails?: string;
  updatestatus?: string;
  messageid?: string;
}
export interface IUpdateChannelRates {
  hotelid?: number;
  gdstype?: string;
  roomtypecode?: string;
  ratecode?: string;
  startdate?: Date;
  enddate?: Date;
  ratedetails?: string;
  updatestatus?: string;
  messageid?: string;
}