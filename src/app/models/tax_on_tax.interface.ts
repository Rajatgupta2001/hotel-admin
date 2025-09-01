/**
 * TaxOnTax Model
 * Database table: taxontax
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITaxOnTax {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxmasterid?: number;
  taxid?: number;
  activationdate?: Date;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateTaxOnTax {
  hotelid?: number;
  taxmasterid?: number;
  taxid?: number;
  activationdate?: Date;
}
export interface IUpdateTaxOnTax {
  hotelid?: number;
  taxmasterid?: number;
  taxid?: number;
  activationdate?: Date;
}