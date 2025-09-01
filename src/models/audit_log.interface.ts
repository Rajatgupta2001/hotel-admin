/**
 * AuditLog Model
 * Database table: auditlog
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAuditLog {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  rsvid?: string;
  description?: Date;
  functionname?: string;
  sequence?: number;
  nadate?: Date;
  auditid?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAuditLog {
  hotelid?: string;
  rsvid?: string;
  description?: Date;
  functionname?: string;
  sequence?: number;
  nadate?: Date;
  auditid?: string;
}
export interface IUpdateAuditLog {
  hotelid?: string;
  rsvid?: string;
  description?: Date;
  functionname?: string;
  sequence?: number;
  nadate?: Date;
  auditid?: string;
}