/**
 * UserWorkAreaPermissions Model Interfaces
 * Database table: userWorkAreaPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserWorkAreaPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userid?: number;
  workarea?: string;
  reportpermission?: number;  // Default: 0
  accesspermission?: number;  // Default: 0
  permisssiondetails?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserWorkAreaPermissions {
  hotelid?: number;
  userid?: number;
  workarea?: string;
  reportpermission?: number;
  accesspermission?: number;
  permisssiondetails?: string;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserWorkAreaPermissions {
  hotelid?: number;
  userid?: number;
  workarea?: string;
  reportpermission?: number;
  accesspermission?: number;
  permisssiondetails?: string;
  status?: string;
  createdby?: number;
}
