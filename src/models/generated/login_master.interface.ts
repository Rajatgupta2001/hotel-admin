/**
 * LoginMaster Model Interfaces
 * Database table: loginMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ILoginMaster {
  id?: number;  // Primary key - auto-generated
  compid?: number;  // Default: 0
  hotelid: number;  // Required
  usertype: number;  // Required
  refid: number;  // Required
  username: string;  // Required
  password: string;  // Required
  usertypecode?: string;  // Default: text("'U'"
  resetpassflag?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
  safemode?: number;  // Default: 0
  mailsent?: number;  // Default: 0
  donotsendmail?: number;  // Default: 0
  isverify?: number;  // Default: 0
  paswdreseton?: Date;  // Default: text("CURRENT_TIMESTAMP"
  salastloggedin?: Date;
  saresetloginexpire?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateLoginMaster {
  compid?: number;
  hotelid: number;
  usertype: number;
  refid: number;
  username: string;
  password: string;
  usertypecode?: string;
  resetpassflag?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  safemode?: number;
  mailsent?: number;
  donotsendmail?: number;
  isverify?: number;
  paswdreseton?: Date;
  salastloggedin?: Date;
  saresetloginexpire?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateLoginMaster {
  compid?: number;
  hotelid?: number;
  usertype?: number;
  refid?: number;
  username?: string;
  password?: string;
  usertypecode?: string;
  resetpassflag?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  safemode?: number;
  mailsent?: number;
  donotsendmail?: number;
  isverify?: number;
  paswdreseton?: Date;
  salastloggedin?: Date;
  saresetloginexpire?: number;
}
