/**
 * PosApplicableTipTaxes Model
 * Database table: posapplicabletiptaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosApplicableTipTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosApplicableTipTaxes {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdatePosApplicableTipTaxes {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}