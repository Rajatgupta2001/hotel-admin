/**
 * ActivityTimeSlotPrices Model Interfaces
 * Database table: activityTimeSlotPrices
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IActivityTimeSlotPrices {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  seasonid?: number;
  timeslotid?: number;
  attributeid?: number;
  adultprice?: number;  // Default: text("'0.000000'"
  childprice?: number;  // Default: text("'0.000000'"
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateActivityTimeSlotPrices {
  hotelid?: number;
  seasonid?: number;
  timeslotid?: number;
  attributeid?: number;
  adultprice?: number;
  childprice?: number;
  status?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateActivityTimeSlotPrices {
  hotelid?: number;
  seasonid?: number;
  timeslotid?: number;
  attributeid?: number;
  adultprice?: number;
  childprice?: number;
  status?: string;
  createdby?: number;
}
