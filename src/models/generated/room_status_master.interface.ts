/**
 * RoomStatusMaster Model Interfaces
 * Database table: roomStatusMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomStatusMaster {
  id?: number;  // Primary key - auto-generated
  statusname: string;  // Required
  statuscode: string;  // Required
  forecolor: string;  // Required
  backgroundcolor: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRoomStatusMaster {
  statusname: string;
  statuscode: string;
  forecolor: string;
  backgroundcolor: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomStatusMaster {
  statusname?: string;
  statuscode?: string;
  forecolor?: string;
  backgroundcolor?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
