/**
 * AuditTrail Model Interfaces
 * Database table: auditTrail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
