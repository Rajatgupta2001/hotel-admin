/**
 * PosShiftRecords Model
 * Database table: posshiftrecords
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosShiftRecords {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  shiftmasterid?: number;
  title?: string;
  shiftstatus?: number;
  description?: string;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreatePosShiftRecords {
  hotelid?: number;
  pospointid?: number;
  shiftmasterid?: number;
  title?: string;
  shiftstatus?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdatePosShiftRecords {
  hotelid?: number;
  pospointid?: number;
  shiftmasterid?: number;
  title?: string;
  shiftstatus?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}