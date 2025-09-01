/**
 * RoomFeatures Model Interfaces
 * Database table: roomFeatures
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomFeatures {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  shortname: string;  // Required
  imagename?: string;
  description: string;  // Required
  icon?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  showonhousekepping?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRoomFeatures {
  hotelid: number;
  title: string;
  shortname: string;
  imagename?: string;
  description: string;
  icon?: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
  showonhousekepping?: number;
}

// Update interface - for entity updates (all fields optional)
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
