/**
 * GdsCloseRoomAllotment Model
 * Database table: gdscloseroomallotment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsCloseRoomAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  closedate?: Date;
  roomtypeid?: number;
  rateid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGdsCloseRoomAllotment {
  hotelid?: number;
  closedate?: Date;
  roomtypeid?: number;
  rateid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGdsCloseRoomAllotment {
  hotelid?: number;
  closedate?: Date;
  roomtypeid?: number;
  rateid?: number;
  createdby?: number;
  modifiedby?: number;
}