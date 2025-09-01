/**
 * LostAndFoundCategory Model
 * Database table: lostandfoundcategory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILostAndFoundCategory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  catname?: string;
  expiry?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreateLostAndFoundCategory {
  hotelid?: number;
  catname?: string;
  expiry?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdateLostAndFoundCategory {
  hotelid?: number;
  catname?: string;
  expiry?: number;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}