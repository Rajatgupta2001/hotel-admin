/**
 * ForexApplicableTaxes Model
 * Database table: forexapplicabletaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IForexApplicableTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxid?: number;
  placeofsupply?: number;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateForexApplicableTaxes {
  hotelid?: number;
  taxid?: number;
  placeofsupply?: number;
  createdby?: number;
}
export interface IUpdateForexApplicableTaxes {
  hotelid?: number;
  taxid?: number;
  placeofsupply?: number;
  createdby?: number;
}