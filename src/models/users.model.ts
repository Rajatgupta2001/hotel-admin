/**
 * Users Model
 */
export interface User {
  id: number;
  compid?: number;
  hotelid: number;
  bloodgroup: string;
  employeeid: string;
  departmentid?: number;
  canlogin?: number;
  jobtypeid?: number;
  emergencyno?: string;
  identitytype: number;
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present: number;
  comments?: string;
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
  jobtypeid?: number;
  emergencyno?: string;
  identitytype: number;
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present: number;
  comments?: string;
  createdby: number;
  status: string;
  posaccesscode?: string;
  allowedips?: string;
}

export interface UpdateUser {
  bloodgroup?: string;
  employeeid?: string;
  departmentid?: number;
  canlogin?: number;
  jobtypeid?: number;
  emergencyno?: string;
  identitytype?: number;
  identityvalue?: string;
  doj?: Date;
  shiftfrom?: string;
  shiftto?: string;
  present?: number;
  comments?: string;
  status?: string;
  modifiedby: number;
  posaccesscode?: string;
  allowedips?: string;
}
