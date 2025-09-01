/**
 * KotMaster Model
 * Database table: kotmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IKotMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  code?: string;
  description?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateKotMaster {
  hotelid?: number;
  title?: string;
  code?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateKotMaster {
  hotelid?: number;
  title?: string;
  code?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}