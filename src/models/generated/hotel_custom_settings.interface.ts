/**
 * HotelCustomSettings Model Interfaces
 * Database table: hotelCustomSettings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelCustomSettings {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  key?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateHotelCustomSettings {
  hotelid: number;
  key?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelCustomSettings {
  hotelid?: number;
  key?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
