/**
 * NightAuditDetails Model Interfaces
 * Database table: nightAuditDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface INightAuditDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  auditid?: number;
  rsvid?: number;
  rsvrmid?: number;
  roomid?: number;
  oldrsvstatus: string;  // Required
  rsvstatus?: string;
  hkstatus?: string;
  auditdate?: Date;
  servcdate?: Date;  // Service date
  rsvrmguestid?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateNightAuditDetails {
  auditid?: number;
  rsvid?: number;
  rsvrmid?: number;
  roomid?: number;
  oldrsvstatus: string;
  rsvstatus?: string;
  hkstatus?: string;
  auditdate?: Date;
  rsvrmguestid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateNightAuditDetails {
  auditid?: number;
  rsvid?: number;
  rsvrmid?: number;
  roomid?: number;
  oldrsvstatus?: string;
  rsvstatus?: string;
  hkstatus?: string;
  auditdate?: Date;
  rsvrmguestid?: number;
}
