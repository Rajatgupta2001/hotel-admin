/**
 * Pos2Order Model Interfaces
 * Database table: pos2Order
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2Order {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  ordernumber?: string;
  guestid?: number;
  guesttype?: string;
  ordertype?: string;
  status?: string;  // Default: text("'O'"
  isnc?: number;  // Default: 0
  roomid?: number;
  suggestion?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  nadate?: Date;
  counterid?: number;
  posid: number;  // Required
  oldinvoiceid?: number;
}

// Create interface - for new entity creation
export interface ICreatePos2Order {
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
  posid: number;
  oldinvoiceid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2Order {
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
