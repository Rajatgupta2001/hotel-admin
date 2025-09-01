/**
 * SeasonsnSpecialPeriodsHistory Model Interfaces
 * Database table: seasonsnSpecialPeriodsHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISeasonsnSpecialPeriodsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  type: string;  // Required
  startdate: Date;  // Required
  enddate: Date;  // Required
  seasonattributeid?: number;
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate: Date;  // Required
}

// Create interface - for new entity creation
export interface ICreateSeasonsnSpecialPeriodsHistory {
  hotelid: number;
  title: string;
  type: string;
  startdate: Date;
  enddate: Date;
  seasonattributeid?: number;
  status: string;
  modifiedby?: number;
  servmdate: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSeasonsnSpecialPeriodsHistory {
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  seasonattributeid?: number;
  status?: string;
  modifiedby?: number;
  servmdate?: Date;
}
