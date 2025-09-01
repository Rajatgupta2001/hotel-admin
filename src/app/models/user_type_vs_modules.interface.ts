/**
 * UserTypeVsModules Model
 * Database table: usertypevsmodules
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserTypeVsModules {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  usertypeid?: number;
  moduleid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateUserTypeVsModules {
  hotelid?: number;
  usertypeid?: number;
  moduleid?: number;
  createdby?: number;
  status?: string;
}
export interface IUpdateUserTypeVsModules {
  hotelid?: number;
  usertypeid?: number;
  moduleid?: number;
  createdby?: number;
  status?: string;
}