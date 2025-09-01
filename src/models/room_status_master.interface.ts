/**
 * RoomStatusMaster Model
 * Database table: roomstatusmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomStatusMaster {
  id?: number;  // Primary key - auto-generated
  statusname?: string;
  statuscode?: string;
  forecolor?: string;
  backgroundcolor?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRoomStatusMaster {
  statusname?: string;
  statuscode?: string;
  forecolor?: string;
  backgroundcolor?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateRoomStatusMaster {
  statusname?: string;
  statuscode?: string;
  forecolor?: string;
  backgroundcolor?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}