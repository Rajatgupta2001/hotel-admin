/**
 * BusinessSrcs Model
 * Database table: businesssrcs
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBusinessSrcs {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBusinessSrcs {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateBusinessSrcs {
  hotelid?: number;
  title?: string;
  description?: string;
  accronym?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}