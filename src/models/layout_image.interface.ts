/**
 * LayoutImage Model
 * Database table: layoutimage
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILayoutImage {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  filename?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  sortorder?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  layoutjson?: Date;
}

export interface ICreateLayoutImage {
  hotelid?: number;
  title?: string;
  description?: string;
  filename?: string;
  status?: string;
  createdby?: number;
  sortorder?: number;
  modifiedby?: number;
  layoutjson?: Date;
}
export interface IUpdateLayoutImage {
  hotelid?: number;
  title?: string;
  description?: string;
  filename?: string;
  status?: string;
  createdby?: number;
  sortorder?: number;
  modifiedby?: number;
  layoutjson?: Date;
}