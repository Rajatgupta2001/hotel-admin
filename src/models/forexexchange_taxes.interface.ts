/**
 * ForexexchangeTaxes Model
 * Database table: forexexchangetaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IForexexchangeTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  taxid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateForexexchangeTaxes {
  hotelid?: number;
  taxid?: number;
  createdby?: number;
}
export interface IUpdateForexexchangeTaxes {
  hotelid?: number;
  taxid?: number;
  createdby?: number;
}