/**
 * HotelCustomSettingsWithDate Model Interfaces
 * Database table: hotelCustomSettingsWithDate
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelCustomSettingsWithDate {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  key?: string;
  value?: string;
  value1?: number;
  value2?: number;
  value3?: string;
  value4?: string;
  startdate: Date;  // Required
  enddate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateHotelCustomSettingsWithDate {
  hotelid?: number;
  key?: string;
  value?: string;
  value1?: number;
  value2?: number;
  value3?: string;
  value4?: string;
  startdate: Date;
  enddate: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
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
  status?: string;
}
