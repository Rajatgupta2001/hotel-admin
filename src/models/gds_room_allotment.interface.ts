/**
 * GdsRoomAllotment Model
 * Database table: gdsroomallotment
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsRoomAllotment {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  rateid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  bkgrecieved?: number;
  releasedays?: number;
  iscontracted?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGdsRoomAllotment {
  hotelid?: number;
  roomtypeid?: number;
  rateid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  bkgrecieved?: number;
  releasedays?: number;
  iscontracted?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGdsRoomAllotment {
  hotelid?: number;
  roomtypeid?: number;
  rateid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  bkgrecieved?: number;
  releasedays?: number;
  iscontracted?: number;
  refid?: number;
  reftype?: string;
  isoverbook?: number;
  createdby?: number;
  modifiedby?: number;
}