/**
 * UserRoomAssignmet Model
 * Database table: userroomassignmet
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserRoomAssignmet {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  userid?: number;
  roomid?: number;
  otherhotelareaid?: number;
  jobtypeid?: number;
  type?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateUserRoomAssignmet {
  hotelid?: number;
  userid?: number;
  roomid?: number;
  otherhotelareaid?: number;
  jobtypeid?: number;
  type?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateUserRoomAssignmet {
  hotelid?: number;
  userid?: number;
  roomid?: number;
  otherhotelareaid?: number;
  jobtypeid?: number;
  type?: string;
  createdby?: number;
  modifiedby?: number;
}