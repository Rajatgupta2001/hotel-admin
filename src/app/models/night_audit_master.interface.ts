/**
 * NightAuditMaster Model
 * Database table: nightauditmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface INightAuditMaster {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  auditdate?: Date;
  status?: number;
  step?: string;
  enddiscrepancies?: number;
  servcdate?: Date;  // Service date - auto-populated
  checkintime?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  completedon?: Date;
  snpmailsent?: number;
  snpincrementsent?: number;
}

export interface ICreateNightAuditMaster {
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