/**
 * RoomDerivation Model
 * Database table: roomderivation
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomDerivation {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomid?: number;
  drmtypeid?: number;
  droomid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateRoomDerivation {
  hotelid?: number;
  roomid?: number;
  drmtypeid?: number;
  droomid?: number;
  createdby?: number;
}
export interface IUpdateRoomDerivation {
  hotelid?: number;
  roomid?: number;
  drmtypeid?: number;
  droomid?: number;
  createdby?: number;
}