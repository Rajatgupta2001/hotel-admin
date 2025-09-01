/**
 * NightAuditEventReport Model
 * Database table: nightauditeventreport
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface INightAuditEventReport {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  eventtype?: string;
  fileurl?: string;
  fileurl2?: string;
  auditid?: number;
  auditdate?: Date;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateNightAuditEventReport {
  hotelid?: number;
  eventtype?: string;
  fileurl?: string;
  fileurl2?: string;
  auditid?: number;
  auditdate?: Date;
}
export interface IUpdateNightAuditEventReport {
  hotelid?: number;
  eventtype?: string;
  fileurl?: string;
  fileurl2?: string;
  auditid?: number;
  auditdate?: Date;
}