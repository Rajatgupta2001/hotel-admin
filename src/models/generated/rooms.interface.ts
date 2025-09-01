/**
 * Rooms Model Interfaces
 * Database table: rooms
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRooms {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  floorid?: number;  // Default: 0
  blockid?: number;  // Default: 0
  rmtypeid: number;  // Required
  rmnameorno: string;  // Required
  roomcode: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  sortorder?: number;  // Default: 0
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  nacreatedon?: Date;  // Default: text("'1947-01-01 00:00:00'"
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: string;  // Default: text("'DV'"
}

// Create interface - for new entity creation
export interface ICreateRooms {
  hotelid: number;
  floorid?: number;
  blockid?: number;
  rmtypeid: number;
  rmnameorno: string;
  roomcode: string;
  description: string;
  createdby?: number;
  sortorder?: number;
  status: string;
  modifiedby?: number;
  nacreatedon?: Date;
  deletedon?: Date;
  hoteldeletedon?: Date;
  type?: string;
}

// Update interface - for entity updates (all fields optional)
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
}
