/**
 * HmsSqshistory Model Interfaces
 * Database table: hmsSQSHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHmsSqshistory {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid?: number;
  reftype?: string;
  type?: string;
  fromdate?: Date;
  todate?: Date;
  val1?: string;
  val2?: string;
  status?: string;  // Default: text("'PENDING'"
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  statuscode?: string;
  statusmsg?: string;
  request?: string;
  sessionid?: string;
}

// Create interface - for new entity creation
export interface ICreateHmsSqshistory {
  hotelid: number;
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

// Update interface - for entity updates (all fields optional)
export interface IUpdateHmsSqshistory {
  hotelid?: number;
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
