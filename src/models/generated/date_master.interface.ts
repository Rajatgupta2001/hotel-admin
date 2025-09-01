/**
 * DateMaster Model Interfaces
 * Database table: dateMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDateMaster {
  id?: number;  // Primary key - auto-generated
  datestr?: Date;
  weekdayno?: number;
}

// Create interface - for new entity creation
export interface ICreateDateMaster {
  datestr?: Date;
  weekdayno?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDateMaster {
  datestr?: Date;
  weekdayno?: number;
}
