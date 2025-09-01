/**
 * SeasonsnSpecialPeriodsHistory Model
 * Database table: seasonsnspecialperiodshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISeasonsnSpecialPeriodsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  seasonattributeid?: number;
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate?: Date;
}

export interface ICreateSeasonsnSpecialPeriodsHistory {
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