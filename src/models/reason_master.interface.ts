/**
 * ReasonMaster Model
 * Database table: reasonmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReasonMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  accronym?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateReasonMaster {
  hotelid?: number;
  title?: string;
  accronym?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateReasonMaster {
  hotelid?: number;
  title?: string;
  accronym?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}