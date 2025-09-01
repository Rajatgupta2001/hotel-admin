/**
 * Users Model
 * Database table: users
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUsers {
  id?: number;  // Primary key - auto-generated
  compid?: number;  // Default: 0 (backend)
  hotelid: number;  // Required
  bloodgroup?: string;
  employeeid?: string;
  departmentid?: number;  // Default: 0 (backend)
  canlogin?: number;
  notloginworkarea?: string;
  jobtypeid?: number;  // Default: 0 (backend)
  emergencyno?: string;
  identitytype: number;  // Required
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present?: number;  // Required
  comments?: string;
  adminconsoleancper?: string;
  housekeeperancper?: string;
  frontdeskancper?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
  posaccesscode?: string;
  allowedips?: string;
  restrictnareport?: number;  // Default: 0 (backend)
  restrictdtreport?: number;  // Default: 0 (backend)
  restrictminbooking?: number;
  alwaysallownareport?: number;  // Default: 0 (backend)
  restrictrsvediting?: number;  // Default: 0 (backend)
  isreadonly?: number;  // Default: 0 (backend)
  issalesperson?: number;  // Default: 0 (backend)
  ncentitle?: number;  // Default: 0 (backend)
  restrictgsemail?: number;
}

export interface ICreateUsers {
  compid?: number;
  hotelid: number;
  bloodgroup?: string;
  employeeid?: string;
  departmentid?: number;
  canlogin?: number;
  notloginworkarea?: string;
  jobtypeid?: number;
  emergencyno?: string;
  identitytype: number;
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present?: number;
  comments?: string;
  adminconsoleancper?: string;
  housekeeperancper?: string;
  frontdeskancper?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  posaccesscode?: string;
  allowedips?: string;
  restrictnareport?: number;
  restrictdtreport?: number;
  restrictminbooking?: number;
  alwaysallownareport?: number;
  restrictrsvediting?: number;
  isreadonly?: number;
  issalesperson?: number;
  ncentitle?: number;
  restrictgsemail?: number;
}
export interface IUpdateUsers {
  compid?: number;
  hotelid?: number;
  bloodgroup?: string;
  employeeid?: string;
  departmentid?: number;
  canlogin?: number;
  notloginworkarea?: string;
  jobtypeid?: number;
  emergencyno?: string;
  identitytype?: number;
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present?: number;
  comments?: string;
  adminconsoleancper?: string;
  housekeeperancper?: string;
  frontdeskancper?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  posaccesscode?: string;
  allowedips?: string;
  restrictnareport?: number;
  restrictdtreport?: number;
  restrictminbooking?: number;
  alwaysallownareport?: number;
  restrictrsvediting?: number;
  isreadonly?: number;
  issalesperson?: number;
  ncentitle?: number;
  restrictgsemail?: number;
}