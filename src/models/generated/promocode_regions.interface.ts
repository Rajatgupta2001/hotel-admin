/**
 * PromocodeRegions Model Interfaces
 * Database table: promocodeRegions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPromocodeRegions {
  hotelid?: number;  // Primary key - auto-generated
  couponid?: number;  // Primary key - auto-generated
  countryid?: number;  // Primary key - auto-generated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePromocodeRegions {
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePromocodeRegions {
  createdby?: number;
}
