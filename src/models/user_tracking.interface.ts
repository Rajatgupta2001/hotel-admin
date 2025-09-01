/**
 * UserTracking Model
 * Database table: usertracking
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserTracking {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  compname?: string;
  designation?: string;
  phoneno?: string;
  phextention?: string;
  mobileno?: string;
  faxno?: string;
  email?: string;
  gender?: string;
  dob?: Date;
  website?: string;
  contacttype?: string;
  status?: string;
  tablename?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateUserTracking {
  hotelid?: number;
  refid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  compname?: string;
  designation?: string;
  phoneno?: string;
  phextention?: string;
  mobileno?: string;
  faxno?: string;
  email?: string;
  gender?: string;
  dob?: Date;
  website?: string;
  contacttype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
}
export interface IUpdateUserTracking {
  hotelid?: number;
  refid?: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  compname?: string;
  designation?: string;
  phoneno?: string;
  phextention?: string;
  mobileno?: string;
  faxno?: string;
  email?: string;
  gender?: string;
  dob?: Date;
  website?: string;
  contacttype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
}