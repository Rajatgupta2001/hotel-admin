/**
 * TblModificationDetails Model Interfaces
 * Database table: tblModificationDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITblModificationDetails {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  tablename: string;  // Required
  refid: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmodifiedon: Date;  // Required
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateTblModificationDetails {
  hotelid: number;
  tablename: string;
  refid: number;
  modifiedby?: number;
  servmodifiedon: Date;
  status: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTblModificationDetails {
  hotelid?: number;
  tablename?: string;
  refid?: number;
  modifiedby?: number;
  servmodifiedon?: Date;
  status?: string;
}
