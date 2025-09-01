/**
 * DerivedRoomAllotment Model Interfaces
 * Database table: derivedRoomAllotment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDerivedRoomAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  cdate: Date;  // Required
  rmtypeid: number;  // Required
  sourcermtypeid: number;  // Required
  roomid?: number;  // Primary key - auto-generated
  sourceroomid?: number;  // Primary key - auto-generated
  allotment?: number;  // Default: text("'0.000000'"
  rsvid?: number;  // Primary key - auto-generated
  dnrid?: number;  // Primary key - auto-generated
  isparent: number;  // Required
  astatus?: string;  // Default: 'A'
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateDerivedRoomAllotment {
  hotelid: number;
  cdate: Date;
  rmtypeid: number;
  sourcermtypeid: number;
  allotment?: number;
  isparent: number;
  astatus?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDerivedRoomAllotment {
  hotelid?: number;
  cdate?: Date;
  rmtypeid?: number;
  sourcermtypeid?: number;
  allotment?: number;
  isparent?: number;
  astatus?: string;
}
