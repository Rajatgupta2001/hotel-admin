/**
 * Modules Model
 * Database table: modules
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IModules {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  refid: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
}

export interface ICreateModules {
  hotelid?: number;
  title?: string;
  description?: string;
  refid: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateModules {
  hotelid?: number;
  title?: string;
  description?: string;
  refid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}