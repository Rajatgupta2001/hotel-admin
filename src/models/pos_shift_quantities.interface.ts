/**
 * PosShiftQuantities Model
 * Database table: posshiftquantities
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosShiftQuantities {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  quantity?: number;
  itemid?: number;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  blocked?: number;
}

export interface ICreatePosShiftQuantities {
  hotelid?: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  quantity?: number;
  itemid?: number;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
  blocked?: number;
}
export interface IUpdatePosShiftQuantities {
  hotelid?: number;
  pospointid?: number;
  shiftid?: number;
  fromdate?: Date;
  todate?: Date;
  quantity?: number;
  itemid?: number;
  status?: Date;
  createdby?: number;
  modifiedby?: number;
  blocked?: number;
}