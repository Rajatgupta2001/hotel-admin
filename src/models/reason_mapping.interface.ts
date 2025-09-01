/**
 * ReasonMapping Model
 * Database table: reasonmapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReasonMapping {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  module?: string;
  submodule?: string;
  reasonid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateReasonMapping {
  hotelid?: number;
  module?: string;
  submodule?: string;
  reasonid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateReasonMapping {
  hotelid?: number;
  module?: string;
  submodule?: string;
  reasonid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}