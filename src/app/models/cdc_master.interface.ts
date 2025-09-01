/**
 * CdcMaster Model
 * Database table: cdcmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICdcMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  val1?: string;
  val2?: string;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  statuscode?: string;
  statusmsg?: string;
}

export interface ICreateCdcMaster {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  val1?: string;
  val2?: string;
  status?: string;
  createdby?: number;
  statuscode?: string;
  statusmsg?: string;
}
export interface IUpdateCdcMaster {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  val1?: string;
  val2?: string;
  status?: string;
  createdby?: number;
  statuscode?: string;
  statusmsg?: string;
}