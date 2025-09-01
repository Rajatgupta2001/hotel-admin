/**
 * UserCounters Model
 * Database table: usercounters
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserCounters {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  counterid?: number;
  userid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserCounters {
  hotelid?: number;
  counterid?: number;
  userid?: number;
  createdby?: number;
}
export interface IUpdateUserCounters {
  hotelid?: number;
  counterid?: number;
  userid?: number;
  createdby?: number;
}