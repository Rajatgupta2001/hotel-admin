/**
 * UserPosPoints Model Interfaces
 * Database table: userPosPoints
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserPosPoints {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  posid?: number;  // Primary key - auto-generated
  userid?: number;  // Primary key - auto-generated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserPosPoints {
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserPosPoints {
  createdby?: number;
}
