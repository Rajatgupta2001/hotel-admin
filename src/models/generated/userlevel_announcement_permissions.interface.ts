/**
 * UserlevelAnnouncementPermissions Model Interfaces
 * Database table: userlevelAnnouncementPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserlevelAnnouncementPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userlevelid?: number;
  posid?: number;
  action?: string;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserlevelAnnouncementPermissions {
  hotelid?: number;
  userlevelid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserlevelAnnouncementPermissions {
  hotelid?: number;
  userlevelid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}
