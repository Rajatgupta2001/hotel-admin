/**
 * PosItems Model
 * Database table: positems
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosItems {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  posid?: number;
  itemid?: number;
  quantity?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosItems {
  hotelid?: number;
  posid?: number;
  itemid?: number;
  quantity?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosItems {
  hotelid?: number;
  posid?: number;
  itemid?: number;
  quantity?: number;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}