/**
 * UserPosPoints Model
 * Database table: userpospoints
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserPosPoints {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  userid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserPosPoints {
  hotelid?: number;
  posid?: number;
  userid?: number;
  createdby?: number;
}
export interface IUpdateUserPosPoints {
  hotelid?: number;
  posid?: number;
  userid?: number;
  createdby?: number;
}