/**
 * WebMapper Model
 * Database table: webmapper
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebMapper {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  type?: string;
  refid?: number;
  reftype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateWebMapper {
  hotelid?: number;
  type?: string;
  refid?: number;
  reftype?: string;
  createdby?: number;
}
export interface IUpdateWebMapper {
  hotelid?: number;
  type?: string;
  refid?: number;
  reftype?: string;
  createdby?: number;
}