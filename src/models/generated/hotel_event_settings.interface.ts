/**
 * HotelEventSettings Model Interfaces
 * Database table: hotelEventSettings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelEventSettings {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  key?: string;
  valuejson?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelEventSettings {
  hotelid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelEventSettings {
  hotelid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}
