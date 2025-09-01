/**
 * PosCategoryTaxes Model
 * Database table: poscategorytaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosCategoryTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  catid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosCategoryTaxes {
  hotelid?: number;
  posid?: number;
  catid?: number;
  taxid?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosCategoryTaxes {
  hotelid?: number;
  posid?: number;
  catid?: number;
  taxid?: number;
  createdby?: number;
  modifiedby?: number;
}