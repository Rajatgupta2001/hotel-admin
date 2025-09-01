/**
 * HotelAvailabilityLock Model Interfaces
 * Database table: hotelAvailabilityLock
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelAvailabilityLock {
  hotelid?: number;  // Primary key - auto-generated
  locktime?: string;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  isautonastarted?: number;  // Default: 0
  locktype?: string;  // Default: text("'RM'"
}

// Create interface - for new entity creation
export interface ICreateHotelAvailabilityLock {
  locktime?: string;
  isautonastarted?: number;
  locktype?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelAvailabilityLock {
  locktime?: string;
  isautonastarted?: number;
  locktype?: string;
}
