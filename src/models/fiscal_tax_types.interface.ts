/**
 * FiscalTaxTypes Model
 * Database table: fiscaltaxtypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFiscalTaxTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxtypeid?: number;
  fiscaltaxtype?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateFiscalTaxTypes {
  hotelid?: number;
  taxtypeid?: number;
  fiscaltaxtype?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateFiscalTaxTypes {
  hotelid?: number;
  taxtypeid?: number;
  fiscaltaxtype?: number;
  createdby?: number;
  modifiedby?: number;
}