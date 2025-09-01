/**
 * Pos2Order Model
 * Database table: pos2order
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2Order {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  ordernumber?: string;
  guestid?: number;
  guesttype?: string;
  ordertype?: string;
  status?: string;
  isnc?: number;
  roomid?: number;
  suggestion?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  nadate?: Date;
  counterid?: number;
  posid?: number;
  oldinvoiceid?: number;
}

export interface ICreatePos2Order {
  hotelid?: number;
  ordernumber?: string;
  guestid?: number;
  guesttype?: string;
  ordertype?: string;
  status?: string;
  isnc?: number;
  roomid?: number;
  suggestion?: string;
  createdby?: number;
  modifiedby?: number;
  nadate?: Date;
  counterid?: number;
  posid?: number;
  oldinvoiceid?: number;
}
export interface IUpdatePos2Order {
  hotelid?: number;
  ordernumber?: string;
  guestid?: number;
  guesttype?: string;
  ordertype?: string;
  status?: string;
  isnc?: number;
  roomid?: number;
  suggestion?: string;
  createdby?: number;
  modifiedby?: number;
  nadate?: Date;
  counterid?: number;
  posid?: number;
  oldinvoiceid?: number;
}