/**
 * DerivedRoomAllotment Model
 * Database table: derivedroomallotment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDerivedRoomAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  cdate?: Date;
  rmtypeid?: number;
  sourcermtypeid?: number;
  roomid?: number;
  sourceroomid?: number;
  allotment?: number;
  rsvid?: number;
  dnrid?: number;
  isparent?: number;
  astatus?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateDerivedRoomAllotment {
  hotelid?: number;
  cdate?: Date;
  rmtypeid?: number;
  sourcermtypeid?: number;
  roomid?: number;
  sourceroomid?: number;
  allotment?: number;
  rsvid?: number;
  dnrid?: number;
  isparent?: number;
  astatus?: string;
}
export interface IUpdateDerivedRoomAllotment {
  hotelid?: number;
  cdate?: Date;
  rmtypeid?: number;
  sourcermtypeid?: number;
  roomid?: number;
  sourceroomid?: number;
  allotment?: number;
  rsvid?: number;
  dnrid?: number;
  isparent?: number;
  astatus?: string;
}