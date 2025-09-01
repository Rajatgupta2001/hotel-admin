/**
 * LostAndFound Model
 * Database table: lostandfound
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILostAndFound {
  id?: number;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateLostAndFound {
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