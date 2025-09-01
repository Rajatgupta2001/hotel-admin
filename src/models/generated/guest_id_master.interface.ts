/**
 * GuestIdMaster Model Interfaces
 * Database table: guestIdMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestIdMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  guestid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateGuestIdMaster {
  hotelid?: number;
  guestid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestIdMaster {
  hotelid?: number;
  guestid?: number;
}
