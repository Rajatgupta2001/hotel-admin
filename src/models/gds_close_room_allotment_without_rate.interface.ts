/**
 * GdsCloseRoomAllotmentWithoutRate Model
 * Database table: gdscloseroomallotmentwithoutrate
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsCloseRoomAllotmentWithoutRate {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  closedate?: Date;
  roomtypeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGdsCloseRoomAllotmentWithoutRate {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  closedate?: Date;
  roomtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGdsCloseRoomAllotmentWithoutRate {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  closedate?: Date;
  roomtypeid?: number;
  createdby?: number;
  modifiedby?: number;
}