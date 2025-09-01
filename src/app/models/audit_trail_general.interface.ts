/**
 * AuditTrailGeneral Model
 * Database table: audittrailgeneral
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAuditTrailGeneral {
  id?: string;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdrefid?: number;
  createdreftypeid?: number;
  createdreftype?: string;
  extravalue?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAuditTrailGeneral {
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