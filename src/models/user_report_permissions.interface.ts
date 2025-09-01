/**
 * UserReportPermissions Model
 * Database table: userreportpermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserReportPermissions {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  userid?: number;
  reportid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserReportPermissions {
  compid?: number;
  hotelid?: number;
  userid?: number;
  reportid?: number;
  createdby?: number;
}
export interface IUpdateUserReportPermissions {
  compid?: number;
  hotelid?: number;
  userid?: number;
  reportid?: number;
  createdby?: number;
}