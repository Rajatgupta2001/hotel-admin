/**
 * UserRoomAssignmet Model Interfaces
 * Database table: userRoomAssignmet
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserRoomAssignmet {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  userid: number;  // Required
  roomid?: number;  // Primary key - auto-generated
  otherhotelareaid?: number;  // Primary key - auto-generated
  jobtypeid?: number;
  type: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateUserRoomAssignmet {
  hotelid: number;
  userid: number;
  jobtypeid?: number;
  type: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserRoomAssignmet {
  hotelid?: number;
  userid?: number;
  jobtypeid?: number;
  type?: string;
  createdby?: number;
  modifiedby?: number;
}
