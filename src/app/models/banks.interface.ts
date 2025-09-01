/**
 * Banks Model
 * Database table: banks
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBanks {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  shortname?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
  accountcodeid?: number;  // Default: 0 (backend)
}

export interface ICreateBanks {
  hotelid: number;
  title?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}
export interface IUpdateBanks {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  accountcodeid?: number;
}