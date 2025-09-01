/**
 * UserTracking Model Interfaces
 * Database table: userTracking
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserTracking {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  salutation: string;  // Required
  fname: string;  // Required
  lname: string;  // Required
  compname: string;  // Required
  designation: string;  // Required
  phoneno: string;  // Required
  phextention: string;  // Required
  mobileno: string;  // Required
  faxno: string;  // Required
  email: string;  // Required
  gender: string;  // Required
  dob: Date;  // Required
  website: string;  // Required
  contacttype: string;  // Required
  status: string;  // Required
  tablename: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateUserTracking {
  hotelid: number;
  refid: number;
  salutation: string;
  fname: string;
  lname: string;
  compname: string;
  designation: string;
  phoneno: string;
  phextention: string;
  mobileno: string;
  faxno: string;
  email: string;
  gender: string;
  dob: Date;
  website: string;
  contacttype: string;
  status: string;
  tablename: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
