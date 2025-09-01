/**
 * SelectDefaultTax Model
 * Database table: selectdefaulttax
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISelectDefaultTax {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  taxid?: number;
  type?: number;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateSelectDefaultTax {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  type?: number;
  createdby?: number;
}
export interface IUpdateSelectDefaultTax {
  hotelid?: number;
  posid?: number;
  taxid?: number;
  type?: number;
  createdby?: number;
}