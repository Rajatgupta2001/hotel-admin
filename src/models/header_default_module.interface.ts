/**
 * HeaderDefaultModule Model
 * Database table: headerdefaultmodule
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHeaderDefaultModule {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  userlevelid?: number;
  moduleid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHeaderDefaultModule {
  hotelid?: number;
  userlevelid?: number;
  moduleid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHeaderDefaultModule {
  hotelid?: number;
  userlevelid?: number;
  moduleid?: number;
  createdby?: number;
  modifiedby?: number;
}