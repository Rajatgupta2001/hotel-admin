/**
 * GroupIdMaster Model Interfaces
 * Database table: groupIdMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGroupIdMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateGroupIdMaster {
  hotelid?: number;
  groupid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGroupIdMaster {
  hotelid?: number;
  groupid?: number;
}
