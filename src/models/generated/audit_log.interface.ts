/**
 * AuditLog Model Interfaces
 * Database table: auditLog
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAuditLog {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  rsvid?: string;
  description?: Date;
  functionname?: string;
  sequence?: number;
  nadate?: Date;
  auditid?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAuditLog {
  hotelid?: string;
  rsvid?: string;
  description?: Date;
  functionname?: string;
  sequence?: number;
  nadate?: Date;
  auditid?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAuditLog {
  hotelid?: string;
  rsvid?: string;
  description?: Date;
  functionname?: string;
  sequence?: number;
  nadate?: Date;
  auditid?: string;
}
