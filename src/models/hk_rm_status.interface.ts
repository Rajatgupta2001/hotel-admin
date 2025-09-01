import type { IRooms } from './rooms.interface';
/**
 * HkRmStatus Model
 * Database table: hkrmstatus
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHkRmStatus {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  occupied?: number;
  otherhotelareaid?: number;
  comments?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  room?: IRooms;
}

export interface ICreateHkRmStatus {
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  occupied?: number;
  otherhotelareaid?: number;
  comments?: string;
  modifiedby?: number;
  room?: IRooms;
}
export interface IUpdateHkRmStatus {
  hotelid?: number;
  roomid?: number;
  statusid?: number;
  lastserviceonocc?: Date;
  lastserviceonvac?: Date;
  updatedon?: Date;
  isassigned?: number;
  assignedto?: number;
  occupied?: number;
  otherhotelareaid?: number;
  comments?: string;
  modifiedby?: number;
  room?: IRooms;
}