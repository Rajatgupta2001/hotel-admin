/**
 * RsvRmMessages Model
 * Database table: rsvrmmessages
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmMessages {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  guestid?: number;
  message?: string;
  messagefrom?: string;
  isdelivered?: number;
  msgdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;
}

export interface ICreateRsvRmMessages {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  guestid?: number;
  message?: string;
  messagefrom?: string;
  isdelivered?: number;
  msgdate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  counterid?: number;
}
export interface IUpdateRsvRmMessages {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  guestid?: number;
  message?: string;
  messagefrom?: string;
  isdelivered?: number;
  msgdate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  counterid?: number;
}