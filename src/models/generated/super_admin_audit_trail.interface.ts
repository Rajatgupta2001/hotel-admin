/**
 * SuperAdminAuditTrail Model Interfaces
 * Database table: superAdminAuditTrail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
