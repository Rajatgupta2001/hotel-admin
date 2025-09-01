/**
 * DateMaster Model
 * Database table: datemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDateMaster {
  id?: number;  // Primary key - auto-generated
  datestr?: Date;
  weekdayno?: number;
}

export interface ICreateDateMaster {
  datestr?: Date;
  weekdayno?: number;
}
export interface IUpdateDateMaster {
  datestr?: Date;
  weekdayno?: number;
}