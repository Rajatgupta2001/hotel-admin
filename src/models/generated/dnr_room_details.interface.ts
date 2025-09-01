/**
 * DnrRoomDetails Model Interfaces
 * Database table: dnrRoomDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDnrRoomDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  roomid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  comments?: string;
  type?: string;  // Default: text("'DNR'"
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  extradetailxml?: string;
}

// Create interface - for new entity creation
export interface ICreateDnrRoomDetails {
  hotelid?: number;
  rmtypeid?: number;
  roomid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  comments?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  extradetailxml?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDnrRoomDetails {
  hotelid?: number;
  rmtypeid?: number;
  roomid?: number;
  fromdate?: Date;
  fromtime?: string;
  todate?: Date;
  totime?: string;
  comments?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
  extradetailxml?: string;
}
