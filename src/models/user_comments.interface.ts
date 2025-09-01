/**
 * UserComments Model
 * Database table: usercomments
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserComments {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: Date;
  groupid?: Date;
  comments?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateUserComments {
  hotelid?: number;
  rsvid?: Date;
  groupid?: Date;
  comments?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateUserComments {
  hotelid?: number;
  rsvid?: Date;
  groupid?: Date;
  comments?: string;
  createdby?: number;
  modifiedby?: number;
}