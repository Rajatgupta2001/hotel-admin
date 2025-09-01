/**
 * PosAuditTrail Model
 * Database table: posaudittrail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosAuditTrail {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  invoiceid?: string;
  rsvid?: string;
  groupid?: string;
  description?: Date;
  oldvalue?: string;
  newvalue?: string;
  controllername?: string;
  tablename?: string;
  rowid?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  module?: string;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePosAuditTrail {
  hotelid?: string;
  invoiceid?: string;
  rsvid?: string;
  groupid?: string;
  description?: Date;
  oldvalue?: string;
  newvalue?: string;
  controllername?: string;
  tablename?: string;
  rowid?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  module?: string;
  nadate?: Date;
  createdby?: number;
}
export interface IUpdatePosAuditTrail {
  hotelid?: string;
  invoiceid?: string;
  rsvid?: string;
  groupid?: string;
  description?: Date;
  oldvalue?: string;
  newvalue?: string;
  controllername?: string;
  tablename?: string;
  rowid?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  module?: string;
  nadate?: Date;
  createdby?: number;
}