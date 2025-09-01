/**
 * Rooms Model
 * Database table: rooms
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { IRsvRooms } from './rsv_rooms.interface';
import { IHkRmStatus } from './hk_rm_status.interface';
import { IRoomTypes } from './room_types.interface';

export interface IRooms {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  floorid?: number;  // Default: 0 (backend)
  blockid?: number;  // Default: 0 (backend)
  rmtypeid?: number;
  rmnameorno?: string;
  roomcode?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  sortorder?: number;  // Default: 0 (backend)
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: string;
  rsvrooms?: IRsvRooms;
  hkRmStatus?: IHkRmStatus;
  roomType?: IRoomTypes;
}

export interface ICreateRooms {
  hotelid: number;
  floorid?: number;
  blockid?: number;
  rmtypeid?: number;
  rmnameorno?: string;
  roomcode?: string;
  description?: string;
  createdby?: number;
  sortorder?: number;
  status: string;
  modifiedby?: number;
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: string;
  rsvrooms?: IRsvRooms;
  hkRmStatus?: IHkRmStatus;
  roomType?: IRoomTypes;
}
export interface IUpdateRooms {
  hotelid?: number;
  floorid?: number;
  blockid?: number;
  rmtypeid?: number;
  rmnameorno?: string;
  roomcode?: string;
  description?: string;
  createdby?: number;
  sortorder?: number;
  status?: string;
  modifiedby?: number;
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: string;
  rsvrooms?: IRsvRooms;
  hkRmStatus?: IHkRmStatus;
  roomType?: IRoomTypes;
}