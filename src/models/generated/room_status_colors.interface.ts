/**
 * RoomStatusColors Model Interfaces
 * Database table: roomStatusColors
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomStatusColors {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
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
export interface ICreateRoomStatusColors {
  hotelid: number;
  forecolor: string;
  backgroundcolor: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomStatusColors {
  hotelid?: number;
  forecolor?: string;
  backgroundcolor?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
