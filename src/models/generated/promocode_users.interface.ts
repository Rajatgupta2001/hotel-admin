/**
 * PromocodeUsers Model Interfaces
 * Database table: promocodeUsers
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPromocodeUsers {
  hotelid?: number;  // Primary key - auto-generated
  couponid?: number;  // Primary key - auto-generated
  userid?: number;  // Primary key - auto-generated
  usertype?: string;  // Primary key - auto-generated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePromocodeUsers {
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePromocodeUsers {
  createdby?: number;
}
