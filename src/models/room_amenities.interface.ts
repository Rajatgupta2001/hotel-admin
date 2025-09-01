/**
 * RoomAmenities Model
 * Database table: roomamenities
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomAmenities {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  amenityid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  sortorder?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRoomAmenities {
  hotelid?: number;
  rmtypeid?: number;
  amenityid?: number;
  createdby?: number;
  status?: string;
  sortorder?: number;
  modifiedby?: number;
}
export interface IUpdateRoomAmenities {
  hotelid?: number;
  rmtypeid?: number;
  amenityid?: number;
  createdby?: number;
  status?: string;
  sortorder?: number;
  modifiedby?: number;
}