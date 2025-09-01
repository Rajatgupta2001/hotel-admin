/**
 * RoomAppliedFeatures Model
 * Database table: roomappliedfeatures
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomAppliedFeatures {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomid?: number;
  featureid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
}

export interface ICreateRoomAppliedFeatures {
  hotelid?: number;
  roomid?: number;
  featureid?: number;
  createdby?: number;
  status?: string;
}
export interface IUpdateRoomAppliedFeatures {
  hotelid?: number;
  roomid?: number;
  featureid?: number;
  createdby?: number;
  status?: string;
}