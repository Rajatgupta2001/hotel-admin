/**
 * HmsSqs Model
 * Database table: hmssqs
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHmsSqs {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  fromdate?: Date;
  todate?: Date;
  val1?: string;
  val2?: string;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  statuscode?: string;
  statusmsg?: string;
  request?: string;
  sessionid?: string;
}

export interface ICreateHmsSqs {
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  fromdate?: Date;
  todate?: Date;
  val1?: string;
  val2?: string;
  status?: string;
  createdby?: number;
  statuscode?: string;
  statusmsg?: string;
  request?: string;
  sessionid?: string;
}
export interface IUpdateHmsSqs {
  hotelid?: number;
  compid?: number;
  refid?: number;
  reftype?: string;
  type?: string;
  fromdate?: Date;
  todate?: Date;
  val1?: string;
  val2?: string;
  status?: string;
  createdby?: number;
  statuscode?: string;
  statusmsg?: string;
  request?: string;
  sessionid?: string;
}