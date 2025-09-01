/**
 * AuditTrail Model
 * Database table: audittrail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAuditTrail {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAuditTrail {
  hotelid?: string;
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
  createdby?: number;
}
export interface IUpdateAuditTrail {
  hotelid?: string;
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
  createdby?: number;
}