/**
 * LoginMaster Model
 * Database table: loginmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILoginMaster {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  hotelid?: number;
  usertype?: number;
  refid?: number;
  username?: string;
  password?: string;
  usertypecode?: string;
  resetpassflag?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  safemode?: number;
  mailsent?: number;
  donotsendmail?: number;
  isverify?: number;
  paswdreseton?: Date;
  salastloggedin?: Date;
  saresetloginexpire?: number;
}

export interface ICreateLoginMaster {
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