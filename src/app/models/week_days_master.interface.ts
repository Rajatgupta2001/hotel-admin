/**
 * WeekDaysMaster Model
 * Database table: weekdaysmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWeekDaysMaster {
  id?: number;  // Primary key - auto-generated
  dayid?: number;
  daytitle?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateWeekDaysMaster {
  dayid?: number;
  daytitle?: string;
  createdby?: number;
  status?: string;
}
export interface IUpdateWeekDaysMaster {
  dayid?: number;
  daytitle?: string;
  createdby?: number;
  status?: string;
}