/**
 * AuditTrailGeneral Model Interfaces
 * Database table: auditTrailGeneral
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAuditTrailGeneral {
  id?: string;  // Primary key - auto-generated
  refid: number;  // Required
  reftype: string;  // Required
  modulename: string;  // Required
  controllername: string;  // Required
  actionname: string;  // Required
  tablename: string;  // Required
  rowid?: string;
  newvalue?: string;
  oldvalue?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdrefid?: number;
  createdreftypeid?: number;
  createdreftype?: string;
  extravalue?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAuditTrailGeneral {
  refid: number;
  reftype: string;
  modulename: string;
  controllername: string;
  actionname: string;
  tablename: string;
  rowid?: string;
  newvalue?: string;
  oldvalue?: string;
  description?: Date;
  createdrefid?: number;
  createdreftypeid?: number;
  createdreftype?: string;
  extravalue?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAuditTrailGeneral {
  refid?: number;
  reftype?: string;
  modulename?: string;
  controllername?: string;
  actionname?: string;
  tablename?: string;
  rowid?: string;
  newvalue?: string;
  oldvalue?: string;
  description?: Date;
  createdrefid?: number;
  createdreftypeid?: number;
  createdreftype?: string;
  extravalue?: string;
}
