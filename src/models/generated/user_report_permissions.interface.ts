/**
 * UserReportPermissions Model Interfaces
 * Database table: userReportPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserReportPermissions {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  userid?: number;
  reportid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserReportPermissions {
  compid?: number;
  hotelid?: number;
  userid?: number;
  reportid?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserReportPermissions {
  compid?: number;
  hotelid?: number;
  userid?: number;
  reportid?: number;
  createdby?: number;
}
