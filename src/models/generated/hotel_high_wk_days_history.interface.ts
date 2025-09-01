/**
 * HotelHighWkDaysHistory Model Interfaces
 * Database table: hotelHighWkDaysHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelHighWkDaysHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  weekday: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelHighWkDaysHistory {
  hotelid: number;
  weekday: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelHighWkDaysHistory {
  hotelid?: number;
  weekday?: number;
  modifiedby?: number;
}
