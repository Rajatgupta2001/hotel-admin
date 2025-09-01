/**
 * PosProductCategoryApplicableShift Model
 * Database table: posproductcategoryapplicableshift
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosProductCategoryApplicableShift {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  shiftid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosProductCategoryApplicableShift {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  shiftid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdatePosProductCategoryApplicableShift {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  shiftid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}