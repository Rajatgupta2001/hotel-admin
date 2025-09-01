/**
 * UserWorkAreaPermissions Model
 * Database table: userworkareapermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserWorkAreaPermissions {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  userid?: number;
  workarea?: string;
  reportpermission?: number;
  accesspermission?: number;
  permisssiondetails?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

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