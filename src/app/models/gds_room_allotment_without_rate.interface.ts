/**
 * GdsRoomAllotmentWithoutRate Model
 * Database table: gdsroomallotmentwithoutrate
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsRoomAllotmentWithoutRate {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  prmallot?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGdsRoomAllotmentWithoutRate {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  prmallot?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGdsRoomAllotmentWithoutRate {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  noofrooms?: number;
  prmallot?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}