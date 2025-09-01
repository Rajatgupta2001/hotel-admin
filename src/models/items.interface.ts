/**
 * Items Model
 * Database table: items
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IItems {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  quantity?: number;  // Default: 0 (backend)
  description?: string;
  price?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateItems {
  hotelid: number;
  title?: string;
  quantity?: number;
  description?: string;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateItems {
  hotelid?: number;
  title?: string;
  quantity?: number;
  description?: string;
  price?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}