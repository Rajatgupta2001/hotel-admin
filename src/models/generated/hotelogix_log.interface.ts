/**
 * HotelogixLog Model Interfaces
 * Database table: hotelogixLog
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelogixLog {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  logtype?: number;
  logtext?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  ip?: string;
  referer?: string;
  pi?: string;
  rsvid?: number;
  groupid?: number;
}

// Create interface - for new entity creation
export interface ICreateHotelogixLog {
  hotelid?: number;
  logtype?: number;
  logtext?: string;
  createdby?: number;
  ip?: string;
  referer?: string;
  pi?: string;
  rsvid?: number;
  groupid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelogixLog {
  hotelid?: number;
  logtype?: number;
  logtext?: string;
  createdby?: number;
  ip?: string;
  referer?: string;
  pi?: string;
  rsvid?: number;
  groupid?: number;
}
