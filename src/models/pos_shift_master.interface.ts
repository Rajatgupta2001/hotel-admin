/**
 * PosShiftMaster Model
 * Database table: posshiftmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosShiftMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  title?: string;
  description?: string;
  fromtime?: string;
  totime?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  orderby?: number;
}

export interface ICreatePosShiftMaster {
  hotelid?: number;
  pospointid?: number;
  title?: string;
  description?: string;
  fromtime?: string;
  totime?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  orderby?: number;
}
export interface IUpdatePosShiftMaster {
  hotelid?: number;
  pospointid?: number;
  title?: string;
  description?: string;
  fromtime?: string;
  totime?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  orderby?: number;
}