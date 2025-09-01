/**
 * Cms Model
 * Database table: cms
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICms {
  id?: number;  // Primary key - auto-generated
  key?: string;
  title?: string;
  content?: string;
  value1?: string;
  value2?: string;
  status?: Date;  // Default: A (backend)
  countryids?: string;
  hoteltype?: string;
  hotelcustomertype?: string;
  knowmore?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCms {
  key?: string;
  title?: string;
  content?: string;
  value1?: string;
  value2?: string;
  status?: Date;
  countryids?: string;
  hoteltype?: string;
  hotelcustomertype?: string;
  knowmore?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCms {
  key?: string;
  title?: string;
  content?: string;
  value1?: string;
  value2?: string;
  status?: Date;
  countryids?: string;
  hoteltype?: string;
  hotelcustomertype?: string;
  knowmore?: string;
  createdby?: number;
  modifiedby?: number;
}