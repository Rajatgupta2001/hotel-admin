/**
 * SuperAdminAuditTrail Model
 * Database table: superadminaudittrail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISuperAdminAuditTrail {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  controller?: string;
  action?: string;
  tablename?: string;
  rowid?: string;
  rsvid?: string;
  groupid?: string;
  oldvalue?: string;
  newvalue?: string;
  description?: Date;
  value1?: string;
  value2?: string;
  value3?: string;
  servcdate?: Date;  // Service date - auto-populated
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateSuperAdminAuditTrail {
  hotelid?: string;
  controller?: string;
  action?: string;
  tablename?: string;
  rowid?: string;
  rsvid?: string;
  groupid?: string;
  oldvalue?: string;
  newvalue?: string;
  description?: Date;
  value1?: string;
  value2?: string;
  value3?: string;
  nadate?: Date;
  createdby?: number;
}
export interface IUpdateSuperAdminAuditTrail {
  hotelid?: string;
  controller?: string;
  action?: string;
  tablename?: string;
  rowid?: string;
  rsvid?: string;
  groupid?: string;
  oldvalue?: string;
  newvalue?: string;
  description?: Date;
  value1?: string;
  value2?: string;
  value3?: string;
  nadate?: Date;
  createdby?: number;
}