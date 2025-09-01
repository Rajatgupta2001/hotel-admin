/**
 * EarlyBirdNlastMinDiscounts Model Interfaces
 * Database table: earlyBirdNLastMinDiscounts
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IEarlyBirdNlastMinDiscounts {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  days?: number;
  occupancy?: number;
  seasonattributeid?: number;
  roomtype?: number;
  discount?: number;  // Default: text("'0.000000'"
  discounttype?: string;  // Default: text("'FV'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateEarlyBirdNlastMinDiscounts {
  hotelid?: number;
  days?: number;
  occupancy?: number;
  seasonattributeid?: number;
  roomtype?: number;
  discount?: number;
  discounttype?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateEarlyBirdNlastMinDiscounts {
  hotelid?: number;
  days?: number;
  occupancy?: number;
  seasonattributeid?: number;
  roomtype?: number;
  discount?: number;
  discounttype?: string;
  createdby?: number;
  modifiedby?: number;
}
