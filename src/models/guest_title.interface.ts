/**
 * GuestTitle Model
 * Database table: guesttitle
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestTitle {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  systemtitle?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGuestTitle {
  hotelid?: number;
  title?: string;
  description?: string;
  systemtitle?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateGuestTitle {
  hotelid?: number;
  title?: string;
  description?: string;
  systemtitle?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}