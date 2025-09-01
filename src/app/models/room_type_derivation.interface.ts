/**
 * RoomTypeDerivation Model
 * Database table: roomtypederivation
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomTypeDerivation {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  drmtypeid?: number;
  rmtypecount?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateRoomTypeDerivation {
  hotelid?: number;
  rmtypeid?: number;
  drmtypeid?: number;
  rmtypecount?: number;
  createdby?: number;
}
export interface IUpdateRoomTypeDerivation {
  hotelid?: number;
  rmtypeid?: number;
  drmtypeid?: number;
  rmtypecount?: number;
  createdby?: number;
}