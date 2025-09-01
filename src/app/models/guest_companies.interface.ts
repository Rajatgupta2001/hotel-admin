/**
 * GuestCompanies Model
 * Database table: guestcompanies
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestCompanies {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  compname?: string;
  addressid?: number;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGuestCompanies {
  hotelid?: number;
  compname?: string;
  addressid?: number;
  description?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGuestCompanies {
  hotelid?: number;
  compname?: string;
  addressid?: number;
  description?: string;
  createdby?: number;
  modifiedby?: number;
}