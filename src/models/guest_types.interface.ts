/**
 * GuestTypes Model
 * Database table: guesttypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestTypes {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  type?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGuestTypes {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGuestTypes {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  type?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}