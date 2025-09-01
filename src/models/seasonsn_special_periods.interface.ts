/**
 * SeasonsnSpecialPeriods Model
 * Database table: seasonsnspecialperiods
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISeasonsnSpecialPeriods {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  type?: string;
  startdate?: Date;
  enddate?: Date;
  seasonattributeid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateSeasonsnSpecialPeriods {
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