/**
 * AttributeMaster Model
 * Database table: attributemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAttributeMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  isfeatured?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAttributeMaster {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdby?: number;
  status?: string;
  isfeatured?: number;
  modifiedby?: number;
}
export interface IUpdateAttributeMaster {
  hotelid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdby?: number;
  status?: string;
  isfeatured?: number;
  modifiedby?: number;
}