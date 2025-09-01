/**
 * RsvRmMessages Model Interfaces
 * Database table: rsvRmMessages
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmMessages {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  rsvrmid: number;  // Required
  guestid: number;  // Required
  message: string;  // Required
  messagefrom?: string;  // Default: 0
  isdelivered?: number;  // Default: 1
  msgdate?: Date;  // Default: get_current_utc_time
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  counterid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvRmMessages {
  hotelid: number;
  rsvid: number;
  rsvrmid: number;
  guestid: number;
  message: string;
  messagefrom?: string;
  isdelivered?: number;
  msgdate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  counterid?: number;
}

// Update interface - for entity updates (all fields optional)
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
