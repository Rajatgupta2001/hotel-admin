/**
 * PosCloseShift Model
 * Database table: poscloseshift
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosCloseShift {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  closedate?: Date;
  pospointid?: number;
  itemid?: number;
  shiftid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosCloseShift {
  hotelid?: number;
  closedate?: Date;
  pospointid?: number;
  itemid?: number;
  shiftid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosCloseShift {
  hotelid?: number;
  closedate?: Date;
  pospointid?: number;
  itemid?: number;
  shiftid?: number;
  createdby?: number;
  modifiedby?: number;
}