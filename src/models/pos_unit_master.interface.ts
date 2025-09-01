/**
 * PosUnitMaster Model
 * Database table: posunitmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosUnitMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shorttitle?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosUnitMaster {
  hotelid?: number;
  title?: string;
  shorttitle?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosUnitMaster {
  hotelid?: number;
  title?: string;
  shorttitle?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}