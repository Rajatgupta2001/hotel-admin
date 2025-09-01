/**
 * SeasonNperiodValidity Model Interfaces
 * Database table: seasonNPeriodValidity
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISeasonNperiodValidity {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  seasonid?: number;
  fromdate?: Date;
  todate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateSeasonNperiodValidity {
  hotelid?: number;
  seasonid?: number;
  fromdate?: Date;
  todate?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSeasonNperiodValidity {
  hotelid?: number;
  seasonid?: number;
  fromdate?: Date;
  todate?: Date;
  createdby?: number;
  modifiedby?: number;
}
