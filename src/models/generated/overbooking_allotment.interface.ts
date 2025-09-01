/**
 * OverbookingAllotment Model Interfaces
 * Database table: overbookingAllotment
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IOverbookingAllotment {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;  // Default: 0
  forcednoofrooms?: number;  // Default: 0
  stopbooking?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateOverbookingAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  forcednoofrooms?: number;
  stopbooking?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateOverbookingAllotment {
  hotelid?: number;
  roomtypeid?: number;
  fromdate?: Date;
  todate?: Date;
  noofrooms?: number;
  forcednoofrooms?: number;
  stopbooking?: number;
  createdby?: number;
  modifiedby?: number;
}
