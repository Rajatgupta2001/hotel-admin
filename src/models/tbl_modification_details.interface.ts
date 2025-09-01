/**
 * TblModificationDetails Model
 * Database table: tblmodificationdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITblModificationDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  tablename?: string;
  refid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmodifiedon?: Date;
  status?: string;
}

export interface ICreateTblModificationDetails {
  hotelid?: number;
  tablename?: string;
  refid?: number;
  modifiedby?: number;
  servmodifiedon?: Date;
  status?: string;
}
export interface IUpdateTblModificationDetails {
  hotelid?: number;
  tablename?: string;
  refid?: number;
  modifiedby?: number;
  servmodifiedon?: Date;
  status?: string;
}