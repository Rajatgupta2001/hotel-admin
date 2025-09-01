/**
 * EventMediaLog Model Interfaces
 * Database table: eventMediaLog
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IEventMediaLog {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: 0
  media?: string;
  rsvid?: number;
  groupid?: number;  // Default: 0
  sqsid?: number;
  guestid?: number;
  eventCode?: string;
  transactionid?: string;
  displayid?: string;
  message?: string;
  status?: string;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  subidentifier?: string;
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
