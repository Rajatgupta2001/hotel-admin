/**
 * PosAnnouncement Model Interfaces
 * Database table: posAnnouncement
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPosAnnouncement {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  announcementid: number;  // Required
  posid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePosAnnouncement {
  hotelid?: number;
  announcementid: number;
  posid: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePosAnnouncement {
  hotelid?: number;
  announcementid?: number;
  posid?: number;
  createdby?: number;
}
