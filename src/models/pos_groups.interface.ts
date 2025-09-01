/**
 * PosGroups Model
 * Database table: posgroups
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPosGroups {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  pospointid?: number;
  title?: string;
  groupstatus?: string;
  shiftid?: number;
  activitydate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreatePosGroups {
  hotelid?: number;
  pospointid?: number;
  title?: string;
  groupstatus?: string;
  shiftid?: number;
  activitydate?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdatePosGroups {
  hotelid?: number;
  pospointid?: number;
  title?: string;
  groupstatus?: string;
  shiftid?: number;
  activitydate?: Date;
  createdby?: number;
  modifiedby?: number;
}