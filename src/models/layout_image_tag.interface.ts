/**
 * LayoutImageTag Model
 * Database table: layoutimagetag
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILayoutImageTag {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  imageid?: number;
  refid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  reftype?: string;
}

export interface ICreateLayoutImageTag {
  hotelid?: number;
  imageid?: number;
  refid?: number;
  createdby?: number;
  modifiedby?: number;
  reftype?: string;
}
export interface IUpdateLayoutImageTag {
  hotelid?: number;
  imageid?: number;
  refid?: number;
  createdby?: number;
  modifiedby?: number;
  reftype?: string;
}