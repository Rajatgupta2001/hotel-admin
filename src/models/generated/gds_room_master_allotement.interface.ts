/**
 * GdsRoomMasterAllotement Model Interfaces
 * Database table: gdsRoomMasterAllotement
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsRoomMasterAllotement {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  roomtypeid?: number;
  allotedroom?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  creatdby?: number;
}

// Create interface - for new entity creation
export interface ICreateGdsRoomMasterAllotement {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  roomtypeid?: number;
  allotedroom?: number;
  status?: string;
  creatdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsRoomMasterAllotement {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  roomtypeid?: number;
  allotedroom?: number;
  status?: string;
  creatdby?: number;
}
