/**
 * HotelHighWkDays Model Interfaces
 * Database table: hotelHighWkDays
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelHighWkDays {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  weekday: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelHighWkDays {
  hotelid: number;
  weekday: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelHighWkDays {
  hotelid?: number;
  weekday?: number;
  createdby?: number;
  modifiedby?: number;
}
