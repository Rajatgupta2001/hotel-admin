/**
 * User Models
 */

export interface User {
  id: number;
  compid?: number;
  hotelid: number;
  bloodgroup: string;
  employeeid: string;
  departmentid?: number;
  canlogin?: number;
  notloginworkarea?: any;
  jobtypeid?: number;
  emergencyno?: string;
  identitytype: number;
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present: number;
  comments?: string;
  adminconsoleancper?: string;
  housekeeperancper?: string;
  frontdeskancper?: string;
  createdby: number;
  status: string;
  modifiedby: number;
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

export interface CreateUser {
  hotelid: number;
  bloodgroup: string;
  employeeid: string;
  departmentid?: number;
  canlogin?: number;
  notloginworkarea?: any;
  jobtypeid?: number;
  emergencyno?: string;
  identitytype: number;
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present: number;
  comments?: string;
  adminconsoleancper?: string;
  housekeeperancper?: string;
  frontdeskancper?: string;
  status: string;
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
  createdby?: number;
  modifiedby?: number;
}

export interface UpdateUser {
  bloodgroup?: string;
  employeeid?: string;
  departmentid?: number;
  canlogin?: number;
  notloginworkarea?: any;
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
  status?: string;
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
  modifiedby?: number;
}
