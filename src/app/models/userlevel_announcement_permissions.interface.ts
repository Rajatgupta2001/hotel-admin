/**
 * UserlevelAnnouncementPermissions Model
 * Database table: userlevelannouncementpermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserlevelAnnouncementPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userlevelid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserlevelAnnouncementPermissions {
  hotelid?: number;
  userlevelid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}
export interface IUpdateUserlevelAnnouncementPermissions {
  hotelid?: number;
  userlevelid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}