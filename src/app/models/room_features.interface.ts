/**
 * RoomFeatures Model
 * Database table: roomfeatures
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomFeatures {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  icon?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  showonhousekepping?: number;
}

export interface ICreateRoomFeatures {
  hotelid?: number;
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  icon?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  showonhousekepping?: number;
}
export interface IUpdateRoomFeatures {
  hotelid?: number;
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: string;
  icon?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  showonhousekepping?: number;
}