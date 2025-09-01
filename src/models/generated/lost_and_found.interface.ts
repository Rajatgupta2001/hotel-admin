/**
 * LostAndFound Model Interfaces
 * Database table: lostAndFound
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILostAndFound {
  id?: number;  // Primary key - auto-generated
  ticketno?: string;
  hotelid: number;  // Required
  workareaid: number;  // Required
  roomid?: number;
  rsvid?: number;
  guestid?: number;
  categoryid: number;  // Required
  otherhotelareaid?: number;
  item: string;  // Required
  description?: string;
  lostandfoundstatus: string;  // Required
  lostdatetime?: Date;
  lostby?: number;
  lostbytype?: string;
  founddatetime?: Date;
  foundby?: number;
  foundbytype?: string;
  returneddatetime?: Date;
  returnedby?: number;
  returnedbytype?: string;
  disposedoffdatetime?: Date;
  disposedby?: number;
  disposedbytype?: string;
  remark?: string;
  expirydate?: Date;
  status?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateLostAndFound {
  ticketno?: string;
  hotelid: number;
  workareaid: number;
  roomid?: number;
  rsvid?: number;
  guestid?: number;
  categoryid: number;
  otherhotelareaid?: number;
  item: string;
  description?: string;
  lostandfoundstatus: string;
  lostdatetime?: Date;
  lostby?: number;
  lostbytype?: string;
  founddatetime?: Date;
  foundby?: number;
  foundbytype?: string;
  returneddatetime?: Date;
  returnedby?: number;
  returnedbytype?: string;
  disposedoffdatetime?: Date;
  disposedby?: number;
  disposedbytype?: string;
  remark?: string;
  expirydate?: Date;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLostAndFound {
  ticketno?: string;
  hotelid?: number;
  workareaid?: number;
  roomid?: number;
  rsvid?: number;
  guestid?: number;
  categoryid?: number;
  otherhotelareaid?: number;
  item?: string;
  description?: string;
  lostandfoundstatus?: string;
  lostdatetime?: Date;
  lostby?: number;
  lostbytype?: string;
  founddatetime?: Date;
  foundby?: number;
  foundbytype?: string;
  returneddatetime?: Date;
  returnedby?: number;
  returnedbytype?: string;
  disposedoffdatetime?: Date;
  disposedby?: number;
  disposedbytype?: string;
  remark?: string;
  expirydate?: Date;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
