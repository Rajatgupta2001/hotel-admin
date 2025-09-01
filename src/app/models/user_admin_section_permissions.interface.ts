/**
 * UserAdminSectionPermissions Model
 * Database table: useradminsectionpermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserAdminSectionPermissions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  userid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateUserAdminSectionPermissions {
  hotelid?: number;
  userid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}
export interface IUpdateUserAdminSectionPermissions {
  hotelid?: number;
  userid?: number;
  sectionname?: string;
  permission?: string;
  status?: string;
  createdby?: number;
}