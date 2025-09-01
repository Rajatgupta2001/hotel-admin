/**
 * UserCounters Model Interfaces
 * Database table: userCounters
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserCounters {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  counterid?: number;  // Primary key - auto-generated
  userid?: number;  // Primary key - auto-generated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateUserCounters {
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateUserCounters {
  createdby?: number;
}
