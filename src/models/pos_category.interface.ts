/**
 * PosCategory Model
 * Database table: poscategory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosCategory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  catname?: string;
  shortname?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  poscatparentid?: number;
  accountcodeid?: number;
}

export interface ICreatePosCategory {
  hotelid?: number;
  pospointid?: number;
  catname?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  poscatparentid?: number;
  accountcodeid?: number;
}
export interface IUpdatePosCategory {
  hotelid?: number;
  pospointid?: number;
  catname?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  poscatparentid?: number;
  accountcodeid?: number;
}