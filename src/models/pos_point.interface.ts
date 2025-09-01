/**
 * PosPoint Model
 * Database table: pospoint
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosPoint {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  deptid?: number;
  pospointname?: string;
  pospointshortname?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  tablereq?: Date;
  istablereq?: number;
  workarealength?: number;
  workareabreadth?: number;
  porductreq?: Date;
  postype?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  isconsumableprod?: number;
  isoverlapping?: number;
  printertype?: string;
  logoimage?: string;
  companyname?: string;
  companyaddress?: string;
  tasknotifyemail?: string;
  accountcodeid?: number;
  isposfb?: number;
  posversion?: number;
}

export interface ICreatePosPoint {
  hotelid?: number;
  deptid?: number;
  pospointname?: string;
  pospointshortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  tablereq?: Date;
  istablereq?: number;
  workarealength?: number;
  workareabreadth?: number;
  porductreq?: Date;
  postype?: string;
  modifiedby?: number;
  isconsumableprod?: number;
  isoverlapping?: number;
  printertype?: string;
  logoimage?: string;
  companyname?: string;
  companyaddress?: string;
  tasknotifyemail?: string;
  accountcodeid?: number;
  isposfb?: number;
  posversion?: number;
}
export interface IUpdatePosPoint {
  hotelid?: number;
  deptid?: number;
  pospointname?: string;
  pospointshortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  tablereq?: Date;
  istablereq?: number;
  workarealength?: number;
  workareabreadth?: number;
  porductreq?: Date;
  postype?: string;
  modifiedby?: number;
  isconsumableprod?: number;
  isoverlapping?: number;
  printertype?: string;
  logoimage?: string;
  companyname?: string;
  companyaddress?: string;
  tasknotifyemail?: string;
  accountcodeid?: number;
  isposfb?: number;
  posversion?: number;
}