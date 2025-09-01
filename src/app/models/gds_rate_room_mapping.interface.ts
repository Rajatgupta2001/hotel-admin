/**
 * GdsRateRoomMapping Model
 * Database table: gdsrateroommapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsRateRoomMapping {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdsid?: number;
  agentid?: number;
  rateid?: number;
  roomtypeid?: number;
  rateroomcode?: string;
  refdetail?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGdsRateRoomMapping {
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