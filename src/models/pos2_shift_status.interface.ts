/**
 * Pos2ShiftStatus Model
 * Database table: pos2shiftstatus
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2ShiftStatus {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  shiftid?: number;
  starttime?: Date;
  endtime?: Date;
  startbyuserid?: number;
  endbyuserid?: number;
  counterid?: number;
  posid?: number;
  shiftclosetimer?: Date;
}

export interface ICreatePos2ShiftStatus {
  hotelid?: number;
  shiftid?: number;
  starttime?: Date;
  endtime?: Date;
  startbyuserid?: number;
  endbyuserid?: number;
  counterid?: number;
  posid?: number;
  shiftclosetimer?: Date;
}
export interface IUpdatePos2ShiftStatus {
  hotelid?: number;
  shiftid?: number;
  starttime?: Date;
  endtime?: Date;
  startbyuserid?: number;
  endbyuserid?: number;
  counterid?: number;
  posid?: number;
  shiftclosetimer?: Date;
}