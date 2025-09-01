/**
 * HeaderDefaultModule Model Interfaces
 * Database table: headerDefaultModule
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHeaderDefaultModule {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  userlevelid?: number;
  moduleid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHeaderDefaultModule {
  hotelid?: number;
  userlevelid?: number;
  moduleid?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHeaderDefaultModule {
  hotelid?: number;
  userlevelid?: number;
  moduleid?: number;
  createdby?: number;
  modifiedby?: number;
}
