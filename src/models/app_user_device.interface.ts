/**
 * AppUserDevice Model
 * Database table: appuserdevice
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAppUserDevice {
  id?: number;  // Primary key - auto-generated
  deviceid?: string;
  token?: string;
  hotelid?: number;
  userid?: number;
  os?: string;
  deviceinfo?: string;
  deviceplatform?: string;
  appversion?: string;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;
  modifiedby?: number;  // User ID reference
  createdby?: number;  // User ID reference
}

export interface ICreateAppUserDevice {
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