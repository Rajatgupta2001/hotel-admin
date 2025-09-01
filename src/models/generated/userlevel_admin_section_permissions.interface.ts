/**
 * UserlevelAdminSectionPermissions Model Interfaces
 * Database table: userlevelAdminSectionPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserlevelAdminSectionPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userlevelid?: number;
  sectionname?: string;
  permission?: string;  // Default: text("'F'"
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserlevelAdminSectionPermissions {
  hotelid?: number;
  userlevelid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserlevelAdminSectionPermissions {
  hotelid?: number;
  userlevelid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}
