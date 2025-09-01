/**
 * PosAnnouncement Model
 * Database table: posannouncement
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosAnnouncement {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  announcementid?: number;
  posid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePosAnnouncement {
  hotelid?: number;
  announcementid?: number;
  posid?: number;
  createdby?: number;
}
export interface IUpdatePosAnnouncement {
  hotelid?: number;
  announcementid?: number;
  posid?: number;
  createdby?: number;
}