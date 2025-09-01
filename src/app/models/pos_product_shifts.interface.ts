/**
 * PosProductShifts Model
 * Database table: posproductshifts
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosProductShifts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  productid?: number;
  shiftid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  orderby?: number;
}

export interface ICreatePosProductShifts {
  hotelid?: number;
  productid?: number;
  shiftid?: number;
  createdby?: number;
  orderby?: number;
}
export interface IUpdatePosProductShifts {
  hotelid?: number;
  productid?: number;
  shiftid?: number;
  createdby?: number;
  orderby?: number;
}