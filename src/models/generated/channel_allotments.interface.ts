/**
 * ChannelAllotments Model Interfaces
 * Database table: channelAllotments
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
