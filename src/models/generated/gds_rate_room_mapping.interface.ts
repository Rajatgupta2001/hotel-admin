/**
 * GdsRateRoomMapping Model Interfaces
 * Database table: gdsRateRoomMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsRateRoomMapping {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  gdsid: number;  // Required
  agentid?: number;
  rateid?: number;
  roomtypeid?: number;
  rateroomcode?: string;
  refdetail?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGdsRateRoomMapping {
  hotelid: number;
  gdsid: number;
  agentid?: number;
  rateid?: number;
  roomtypeid?: number;
  rateroomcode?: string;
  refdetail?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsRateRoomMapping {
  hotelid?: number;
  gdsid?: number;
  agentid?: number;
  rateid?: number;
  roomtypeid?: number;
  rateroomcode?: string;
  refdetail?: string;
  createdby?: number;
  modifiedby?: number;
}
