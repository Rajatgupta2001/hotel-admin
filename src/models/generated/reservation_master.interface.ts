/**
 * ReservationIdMaster Model Interfaces
 * Database table: reservationIdMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IReservationIdMaster {
  hotelId?: number;  // Primary key - auto-generated
  rsvId?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateReservationIdMaster {
  rsvId?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateReservationIdMaster {
  rsvId?: number;
}
