/**
 * ContactInfoMaster Model Interfaces
 * Database table: contactInfoMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IContactInfoMaster {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  salutation?: string;
  fname?: string;
  lname?: string;
  compname: string;  // Required
  designation: string;  // Required
  phoneno?: string;  // Default: ''
  phextention: string;  // Required
  mobileno?: string;  // Default: ''
  faxno?: string;  // Default: ''
  email: string;  // Required
  webresvpass?: string;
  gender?: string;  // Default: '1'
  dob?: Date;  // Default: None
  website: string;  // Required
  contacttype: string;  // Required
  status: string;  // Required
  tablename: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateContactInfoMaster {
  hotelid: number;
  refid: number;
  salutation?: string;
  fname?: string;
  lname?: string;
  compname: string;
  designation: string;
  phoneno?: string;
  phextention: string;
  mobileno?: string;
  faxno?: string;
  email: string;
  webresvpass?: string;
  gender?: string;
  dob?: Date;
  website: string;
  contacttype: string;
  status: string;
  tablename: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateContactInfoMaster {
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
  webresvpass?: string;
  gender?: string;
  dob?: Date;
  website?: string;
  contacttype?: string;
  status?: string;
  tablename?: string;
  modifiedby?: number;
}
