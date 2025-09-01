/**
 * RoomGuestKountaMapping Model
 * Database table: roomguestkountamapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomGuestKountaMapping {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  roomid?: number;
  rsvid?: number;
  rsvrmguestid?: number;
  guestid?: number;
  groupid?: number;
  groupownerid?: number;
  type?: string;
  kountaguestid?: number;
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateRoomGuestKountaMapping {
  hotelid?: number;
  roomtypeid?: number;
  roomid?: number;
  rsvid?: number;
  rsvrmguestid?: number;
  guestid?: number;
  groupid?: number;
  groupownerid?: number;
  type?: string;
  kountaguestid?: number;
}
export interface IUpdateRoomGuestKountaMapping {
  hotelid?: number;
  roomtypeid?: number;
  roomid?: number;
  rsvid?: number;
  rsvrmguestid?: number;
  guestid?: number;
  groupid?: number;
  groupownerid?: number;
  type?: string;
  kountaguestid?: number;
}