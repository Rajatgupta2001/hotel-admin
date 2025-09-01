/**
 * RoomTypeGenderDetails Model
 * Database table: roomtypegenderdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomTypeGenderDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rmtypeid?: number;
  gendertype?: string;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  sessionid?: string;
}

export interface ICreateRoomTypeGenderDetails {
  hotelid?: number;
  rmtypeid?: number;
  gendertype?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}
export interface IUpdateRoomTypeGenderDetails {
  hotelid?: number;
  rmtypeid?: number;
  gendertype?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  sessionid?: string;
}