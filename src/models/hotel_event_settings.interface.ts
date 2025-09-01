/**
 * HotelEventSettings Model
 * Database table: hoteleventsettings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelEventSettings {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  key?: string;
  valuejson?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelEventSettings {
  hotelid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHotelEventSettings {
  hotelid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}