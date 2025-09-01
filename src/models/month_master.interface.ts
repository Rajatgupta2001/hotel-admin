/**
 * MonthMaster Model
 * Database table: monthmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMonthMaster {
  id?: number;  // Primary key - auto-generated
  monthstr?: number;
}

export interface ICreateMonthMaster {
  monthstr?: number;
}
export interface IUpdateMonthMaster {
  monthstr?: number;
}