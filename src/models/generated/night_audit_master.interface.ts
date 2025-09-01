/**
 * NightAuditMaster Model Interfaces
 * Database table: nightAuditMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface INightAuditMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  auditdate: Date;  // Required
  status?: number;  // Default: 0
  step?: string;  // Default: text("'STEP1'"
  enddiscrepancies?: number;  // Default: 0
  servcdate?: Date;  // Service date
  checkintime?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  completedon?: Date;
  snpmailsent?: number;  // Default: 0
  snpincrementsent?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateNightAuditMaster {
  hotelid?: number;
  auditdate: Date;
  status?: number;
  step?: string;
  enddiscrepancies?: number;
  checkintime?: string;
  createdby?: number;
  completedon?: Date;
  snpmailsent?: number;
  snpincrementsent?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateNightAuditMaster {
  hotelid?: number;
  auditdate?: Date;
  status?: number;
  step?: string;
  enddiscrepancies?: number;
  checkintime?: string;
  createdby?: number;
  completedon?: Date;
  snpmailsent?: number;
  snpincrementsent?: number;
}
