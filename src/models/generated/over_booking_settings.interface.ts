/**
 * OverBookingSettings Model Interfaces
 * Database table: overBookingSettings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IOverBookingSettings {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  rmtypeid: number;  // Required
  overbookingallowed?: number;  // Default: 0
  overbookvalue?: number;  // Default: 0
  overbooktype?: string;  // Default: text("'FV'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateOverBookingSettings {
  hotelid: number;
  rmtypeid: number;
  overbookingallowed?: number;
  overbookvalue?: number;
  overbooktype?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateOverBookingSettings {
  hotelid?: number;
  rmtypeid?: number;
  overbookingallowed?: number;
  overbookvalue?: number;
  overbooktype?: string;
  createdby?: number;
  modifiedby?: number;
}
