/**
 * EventMediaLog Model
 * Database table: eventmedialog
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IEventMediaLog {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  media?: string;
  rsvid?: number;
  groupid?: number;
  sqsid?: number;
  guestid?: number;
  eventCode?: string;
  transactionid?: string;
  displayid?: string;
  message?: string;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  subidentifier?: string;
}

export interface ICreateEventMediaLog {
  hotelid?: number;
  media?: string;
  rsvid?: number;
  groupid?: number;
  sqsid?: number;
  guestid?: number;
  eventCode?: string;
  transactionid?: string;
  displayid?: string;
  message?: string;
  status?: string;
  subidentifier?: string;
}
export interface IUpdateEventMediaLog {
  hotelid?: number;
  media?: string;
  rsvid?: number;
  groupid?: number;
  sqsid?: number;
  guestid?: number;
  eventCode?: string;
  transactionid?: string;
  displayid?: string;
  message?: string;
  status?: string;
  subidentifier?: string;
}