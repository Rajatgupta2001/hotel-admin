/**
 * PosShiftBlocked Model
 * Database table: posshiftblocked
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosShiftBlocked {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  itemid?: number;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  blocked?: number;
}

export interface ICreatePosShiftBlocked {
  hotelid?: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  itemid?: number;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
  blocked?: number;
}
export interface IUpdatePosShiftBlocked {
  hotelid?: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  itemid?: number;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
  blocked?: number;
}