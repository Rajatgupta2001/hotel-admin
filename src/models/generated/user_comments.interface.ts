/**
 * UserComments Model Interfaces
 * Database table: userComments
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserComments {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid?: string;  // Default: 0
  groupid?: string;  // Default: 0
  comments?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateUserComments {
  hotelid: number;
  rsvid?: string;
  groupid?: string;
  comments?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserComments {
  hotelid?: number;
  rsvid?: string;
  groupid?: string;
  comments?: string;
  createdby?: number;
  modifiedby?: number;
}
