/**
 * RoomGuestKountaMapping Model Interfaces
 * Database table: roomGuestKountaMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomGuestKountaMapping {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  roomtypeid?: number;
  roomid?: number;
  rsvid?: number;
  rsvrmguestid?: number;
  guestid?: number;
  groupid?: number;
  groupownerid?: number;
  type: string;  // Required
  kountaguestid: number;  // Required
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateRoomGuestKountaMapping {
  hotelid: number;
  roomtypeid?: number;
  roomid?: number;
  rsvid?: number;
  rsvrmguestid?: number;
  guestid?: number;
  groupid?: number;
  groupownerid?: number;
  type: string;
  kountaguestid: number;
}

// Update interface - for entity updates (all fields optional)
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
