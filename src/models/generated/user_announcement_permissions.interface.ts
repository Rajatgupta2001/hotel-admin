/**
 * UserAnnouncementPermissions Model Interfaces
 * Database table: userAnnouncementPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserAnnouncementPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userid?: number;
  posid?: number;
  action?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserAnnouncementPermissions {
  hotelid?: number;
  userid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserAnnouncementPermissions {
  hotelid?: number;
  userid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}
