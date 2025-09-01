import type { IHotels } from './hotels.interface';
/**
 * HotelCustomSettings Model
 * Database table: hotelcustomsettings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelCustomSettings {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  key?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
  hotel?: IHotels;
}

export interface ICreateHotelCustomSettings {
  hotelid?: number;
  key?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  hotel?: IHotels;
}
export interface IUpdateHotelCustomSettings {
  hotelid?: number;
  key?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  hotel?: IHotels;
}