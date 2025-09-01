/**
 * WeekDaysMaster Model Interfaces
 * Database table: weekDaysMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWeekDaysMaster {
  id?: number;  // Primary key - auto-generated
  dayid?: number;
  daytitle?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateWeekDaysMaster {
  dayid?: number;
  daytitle?: string;
  createdby?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWeekDaysMaster {
  dayid?: number;
  daytitle?: string;
  createdby?: number;
  status?: string;
}
