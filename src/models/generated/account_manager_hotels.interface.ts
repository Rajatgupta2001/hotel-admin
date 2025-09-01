/**
 * AccountManagerHotels Model Interfaces
 * Database table: accountManagerHotels
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountManagerHotels {
  userid?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateAccountManagerHotels {
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountManagerHotels {
}
