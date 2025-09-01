/**
 * HotelAgreement Model Interfaces
 * Database table: hotelAgreement
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelAgreement {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  hotelid?: number;
  page?: string;
  agreetype?: string;
  agree?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateHotelAgreement {
  compid?: number;
  userid?: number;
  hotelid?: number;
  page?: string;
  agreetype?: string;
  agree?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelAgreement {
  compid?: number;
  userid?: number;
  hotelid?: number;
  page?: string;
  agreetype?: string;
  agree?: number;
}
