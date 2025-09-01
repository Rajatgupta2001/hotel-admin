/**
 * AuditTrailAdmin Model Interfaces
 * Database table: auditTrailAdmin
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAuditTrailAdmin {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  description?: string;
  controllername?: string;
  tablename?: string;
  columnname?: string;
  rowid?: string;
  oldvalue?: string;
  newvalue?: string;
  lanuageid?: number;  // Default: 0
  inserttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAuditTrailAdmin {
  hotelid?: number;
  description?: string;
  controllername?: string;
  tablename?: string;
  columnname?: string;
  rowid?: string;
  oldvalue?: string;
  newvalue?: string;
  lanuageid?: number;
  inserttype?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAuditTrailAdmin {
  hotelid?: number;
  description?: string;
  controllername?: string;
  tablename?: string;
  columnname?: string;
  rowid?: string;
  oldvalue?: string;
  newvalue?: string;
  lanuageid?: number;
  inserttype?: string;
  createdby?: number;
}
