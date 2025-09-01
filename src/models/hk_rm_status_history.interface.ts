import type { IHkRmStatus } from './hk_rm_status.interface';
/**
 * HkRmStatusHistory Model
 * Database table: hkrmstatushistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHkRmStatusHistory {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHkRmStatusHistory {
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  modifiedby?: number;
}
export interface IUpdateHkRmStatusHistory {
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  modifiedby?: number;
}