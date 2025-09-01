/**
 * GdsRoomMasterAllotement Model
 * Database table: gdsroommasterallotement
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsRoomMasterAllotement {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  roomtypeid?: number;
  allotedroom?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  creatdby?: number;
}

export interface ICreateGdsRoomMasterAllotement {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  roomtypeid?: number;
  allotedroom?: number;
  status?: string;
  creatdby?: number;
}
export interface IUpdateGdsRoomMasterAllotement {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  roomtypeid?: number;
  allotedroom?: number;
  status?: string;
  creatdby?: number;
}