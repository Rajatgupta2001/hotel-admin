/**
 * NightAuditEventReport Model Interfaces
 * Database table: nightAuditEventReport
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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

// Create interface - for new entity creation
export interface ICreateNightAuditEventReport {
  hotelid?: number;
  eventtype?: string;
  fileurl?: string;
  fileurl2?: string;
  auditid?: number;
  auditdate?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateNightAuditEventReport {
  hotelid?: number;
  eventtype?: string;
  fileurl?: string;
  fileurl2?: string;
  auditid?: number;
  auditdate?: Date;
}
