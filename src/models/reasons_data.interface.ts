/**
 * ReasonsData Model
 * Database table: reasonsdata
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReasonsData {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  reasonmapid?: number;
  reasontype?: string;
  refid?: number;
  reftype?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateReasonsData {
  hotelid?: number;
  reasonmapid?: number;
  reasontype?: string;
  refid?: number;
  reftype?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateReasonsData {
  hotelid?: number;
  reasonmapid?: number;
  reasontype?: string;
  refid?: number;
  reftype?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
}