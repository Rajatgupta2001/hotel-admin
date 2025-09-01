/**
 * AuditTrailAdmin Model
 * Database table: audittrailadmin
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  lanuageid?: number;
  inserttype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

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