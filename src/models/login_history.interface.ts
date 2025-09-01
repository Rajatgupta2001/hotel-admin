/**
 * LoginHistory Model
 * Database table: loginhistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILoginHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  usernameused?: string;
  loginattempedon?: Date;
  issuccessful?: number;
  ipaddress?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateLoginHistory {
  hotelid?: number;
  usernameused?: string;
  loginattempedon?: Date;
  issuccessful?: number;
  ipaddress?: string;
  modifiedby?: number;
}
export interface IUpdateLoginHistory {
  hotelid?: number;
  usernameused?: string;
  loginattempedon?: Date;
  issuccessful?: number;
  ipaddress?: string;
  modifiedby?: number;
}