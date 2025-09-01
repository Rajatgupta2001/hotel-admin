/**
 * SeasonsnSpecialPeriods Model Interfaces
 * Database table: seasonsnSpecialPeriods
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISeasonsnSpecialPeriods {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  type: string;  // Required
  startdate: Date;  // Required
  enddate: Date;  // Required
  seasonattributeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateSeasonsnSpecialPeriods {
  hotelid: number;
  title: string;
  type: string;
  startdate: Date;
  enddate: Date;
  seasonattributeid?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSeasonsnSpecialPeriods {
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  seasonattributeid?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
