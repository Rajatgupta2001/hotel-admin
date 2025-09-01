import type { ITaxMaster } from './tax_master.interface';
/**
 * PosProdTaxes Model
 * Database table: posprodtaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosProdTaxes {
  id?: number;  // Primary key - auto-generated
  prodid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  hotelid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  taxMaster?: ITaxMaster;
}

export interface ICreatePosProdTaxes {
  prodid?: number;
  taxid?: number;
  createdby?: number;
  hotelid?: number;
  modifiedby?: number;
  taxMaster?: ITaxMaster;
}
export interface IUpdatePosProdTaxes {
  prodid?: number;
  taxid?: number;
  createdby?: number;
  hotelid?: number;
  modifiedby?: number;
  taxMaster?: ITaxMaster;
}