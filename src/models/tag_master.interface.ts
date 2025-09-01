/**
 * TagMaster Model
 * Database table: tagmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITagMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  reftype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateTagMaster {
  hotelid?: number;
  title?: string;
  description?: string;
  reftype?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateTagMaster {
  hotelid?: number;
  title?: string;
  description?: string;
  reftype?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}