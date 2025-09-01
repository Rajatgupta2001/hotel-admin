/**
 * PosPoint Model Interfaces
 * Database table: posPoint
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosPoint {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  deptid: number;  // Required
  pospointname: string;  // Required
  pospointshortname?: string;
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  tablereq?: string;  // Default: 0
  istablereq?: number;  // Default: 0
  workarealength?: number;
  workareabreadth?: number;
  porductreq?: string;  // Default: text("'1'"
  postype?: string;  // Default: text("'N'"
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  isconsumableprod?: number;  // Default: text("'1'"
  isoverlapping?: number;  // Default: 0
  printertype?: string;  // Default: text("'GENERAL'"
  logoimage?: string;
  companyname?: string;
  companyaddress?: string;
  tasknotifyemail?: string;
  accountcodeid?: number;  // Default: 0
  isposfb?: number;  // Default: 0
  posversion?: number;  // Default: text("'1'"
}

// Create interface - for new entity creation
export interface ICreatePosPoint {
  hotelid: number;
  deptid: number;
  pospointname: string;
  pospointshortname?: string;
  description: string;
  createdby?: number;
  status: string;
  tablereq?: string;
  istablereq?: number;
  workarealength?: number;
  workareabreadth?: number;
  porductreq?: string;
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

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosPoint {
  hotelid?: number;
  deptid?: number;
  pospointname?: string;
  pospointshortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  tablereq?: string;
  istablereq?: number;
  workarealength?: number;
  workareabreadth?: number;
  porductreq?: string;
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
