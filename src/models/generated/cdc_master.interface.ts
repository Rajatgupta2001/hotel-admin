/**
 * CdcMaster Model Interfaces
 * Database table: cdcMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICdcMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  refid?: number;
  reftype?: string;
  val1?: string;
  val2?: string;
  status?: string;  // Default: text("'PENDING'"
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  statuscode?: string;
  statusmsg?: string;
}

// Create interface - for new entity creation
export interface ICreateCdcMaster {
  refid?: number;
  reftype?: string;
  val1?: string;
  val2?: string;
  status?: string;
  createdby?: number;
  statuscode?: string;
  statusmsg?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCdcMaster {
  refid?: number;
  reftype?: string;
  val1?: string;
  val2?: string;
  status?: string;
  createdby?: number;
  statuscode?: string;
  statusmsg?: string;
}
