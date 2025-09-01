/**
 * ChannelRates Model Interfaces
 * Database table: channelRates
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IChannelRates {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  gdstype?: string;
  roomtypecode?: string;
  ratecode?: string;
  startdate?: Date;
  enddate?: Date;
  ratedetails?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatestatus?: string;
  messageid?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateChannelRates {
  hotelid: number;
  gdstype?: string;
  roomtypecode?: string;
  ratecode?: string;
  startdate?: Date;
  enddate?: Date;
  ratedetails?: string;
  updatestatus?: string;
  messageid?: string;
}

// Update interface - for entity updates (all fields optional)
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
