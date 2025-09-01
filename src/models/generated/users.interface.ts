/**
 * Users Model Interfaces
 * Database table: users
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUsers {
  id?: number;  // Primary key - auto-generated
  compid?: number;  // Default: 0
  hotelid: number;  // Required
  bloodgroup: string;  // Required
  employeeid: string;  // Required
  departmentid?: number;  // Default: 0
  canlogin?: number;  // Default: text("'1'"
  notloginworkarea?: string;  // Default: text("'HK'"
  jobtypeid?: number;  // Default: 0
  emergencyno?: string;
  identitytype: number;  // Required
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present?: number;  // Default: text("'1'"
  comments?: string;
  adminconsoleancper?: string;
  housekeeperancper?: string;
  frontdeskancper?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  posaccesscode?: string;
  allowedips?: string;
  restrictnareport?: number;  // Default: 0
  restrictdtreport?: number;  // Default: 0
  restrictminbooking?: number;  // Default: text("'1'"
  alwaysallownareport?: number;  // Default: 0
  restrictrsvediting?: number;  // Default: 0
  isreadonly?: number;  // Default: 0
  issalesperson?: number;  // Default: 0
  ncentitle?: number;  // Default: 0
  restrictgsemail?: number;  // Default: text("'1'"
}

// Create interface - for new entity creation
export interface ICreateUsers {
  compid?: number;
  hotelid: number;
  bloodgroup: string;
  employeeid: string;
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
  status: string;
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

// Update interface - for entity updates (all fields optional)
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
