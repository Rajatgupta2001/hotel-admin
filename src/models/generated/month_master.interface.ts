/**
 * MonthMaster Model Interfaces
 * Database table: monthMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMonthMaster {
  id?: number;  // Primary key - auto-generated
  monthstr?: number;
}

// Create interface - for new entity creation
export interface ICreateMonthMaster {
  monthstr?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMonthMaster {
  monthstr?: number;
}
