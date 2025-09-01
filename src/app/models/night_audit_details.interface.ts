/**
 * NightAuditDetails Model
 * Database table: nightauditdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface INightAuditDetails {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  auditid?: number;
  rsvid?: number;
  rsvrmid?: number;
  roomid?: number;
  oldrsvstatus?: string;
  rsvstatus?: string;
  hkstatus?: string;
  auditdate?: Date;
  servcdate?: Date;  // Service date - auto-populated
  rsvrmguestid?: number;
}

export interface ICreateNightAuditDetails {
  hotelid?: number;
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
export interface IUpdateNightAuditDetails {
  hotelid?: number;
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