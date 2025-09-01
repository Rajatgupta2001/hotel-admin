/**
 * UserAdminSectionPermissions Model Interfaces
 * Database table: userAdminSectionPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserAdminSectionPermissions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  userid?: number;
  sectionname?: string;
  permission?: string;  // Default: text("'F'"
  status?: string;  // Default: 'A'
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateUserAdminSectionPermissions {
  hotelid?: number;
  userid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserAdminSectionPermissions {
  hotelid?: number;
  userid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}
