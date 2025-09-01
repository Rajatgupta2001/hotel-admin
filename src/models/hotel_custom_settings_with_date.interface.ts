import type { IHotelCustomSettings } from './hotel_custom_settings.interface';
/**
 * HotelCustomSettingsWithDate Model
 * Database table: hotelcustomsettingswithdate
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelCustomSettingsWithDate {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  key?: string;
  value?: string;
  value1?: number;
  value2?: number;
  value3?: string;
  value4?: string;
  startdate?: Date;
  enddate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: Date;
}

export interface ICreateHotelCustomSettingsWithDate {
  hotelid?: number;
  key?: string;
  value?: string;
  value1?: number;
  value2?: number;
  value3?: string;
  value4?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: Date;
}
export interface IUpdateHotelCustomSettingsWithDate {
  hotelid?: number;
  key?: string;
  value?: string;
  value1?: number;
  value2?: number;
  value3?: string;
  value4?: string;
  startdate?: Date;
  enddate?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: Date;
}