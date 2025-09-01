/**
 * UserlevelWorkAreaPermissions Model
 * Database table: userlevelworkareapermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserlevelWorkAreaPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userlevelid?: number;
  workarea?: string;
  reportpermission?: number;
  accesspermission?: number;
  permisssiondetails?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserlevelWorkAreaPermissions {
  hotelid?: number;
  userlevelid?: number;
  workarea?: string;
  reportpermission?: number;
  accesspermission?: number;
  permisssiondetails?: string;
  status?: string;
  createdby?: number;
}
export interface IUpdateUserlevelWorkAreaPermissions {
  hotelid?: number;
  userlevelid?: number;
  workarea?: string;
  reportpermission?: number;
  accesspermission?: number;
  permisssiondetails?: string;
  status?: string;
  createdby?: number;
}