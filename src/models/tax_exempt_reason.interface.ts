/**
 * TaxExemptReason Model
 * Database table: taxexemptreason
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITaxExemptReason {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateTaxExemptReason {
  hotelid?: number;
  title?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateTaxExemptReason {
  hotelid?: number;
  title?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}