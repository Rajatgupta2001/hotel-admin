/**
 * UserlevelAdminSectionPermissions Model
 * Database table: userleveladminsectionpermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserlevelAdminSectionPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userlevelid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserlevelAdminSectionPermissions {
  hotelid?: number;
  userlevelid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}
export interface IUpdateUserlevelAdminSectionPermissions {
  hotelid?: number;
  userlevelid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}