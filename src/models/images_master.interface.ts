/**
 * ImagesMaster Model
 * Database table: imagesmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IImagesMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  image?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  type?: string;
  caption?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  large?: number;
}

export interface ICreateImagesMaster {
  hotelid?: number;
  refid?: number;
  image?: string;
  description?: string;
  createdby?: number;
  status?: string;
  type?: string;
  caption?: string;
  modifiedby?: number;
  large?: number;
}
export interface IUpdateImagesMaster {
  hotelid?: number;
  refid?: number;
  image?: string;
  description?: string;
  createdby?: number;
  status?: string;
  type?: string;
  caption?: string;
  modifiedby?: number;
  large?: number;
}