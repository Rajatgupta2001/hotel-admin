/**
 * AppUserDevice Model Interfaces
 * Database table: appUserDevice
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAppUserDevice {
  id?: number;  // Primary key - auto-generated
  deviceid: string;  // Required
  token: string;  // Required
  hotelid?: number;
  userid?: number;
  os: string;  // Required
  deviceinfo: string;  // Required
  deviceplatform: string;  // Required
  appversion: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP"
  modifiedby?: number;  // User ID reference
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAppUserDevice {
  deviceid: string;
  token: string;
  hotelid?: number;
  userid?: number;
  os: string;
  deviceinfo: string;
  deviceplatform: string;
  appversion: string;
  updatedon?: Date;
  modifiedby?: number;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAppUserDevice {
  deviceid?: string;
  token?: string;
  hotelid?: number;
  userid?: number;
  os?: string;
  deviceinfo?: string;
  deviceplatform?: string;
  appversion?: string;
  updatedon?: Date;
  modifiedby?: number;
  createdby?: number;
}
