/**
 * UserAnnouncementPermissions Model
 * Database table: userannouncementpermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserAnnouncementPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserAnnouncementPermissions {
  hotelid?: number;
  userid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}
export interface IUpdateUserAnnouncementPermissions {
  hotelid?: number;
  userid?: number;
  posid?: number;
  action?: string;
  status?: string;
  createdby?: number;
}