/**
 * SeasonNperiodValidity Model
 * Database table: seasonnperiodvalidity
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISeasonNperiodValidity {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  seasonid?: number;
  fromdate?: Date;
  todate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateSeasonNperiodValidity {
  hotelid?: number;
  seasonid?: number;
  fromdate?: Date;
  todate?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateSeasonNperiodValidity {
  hotelid?: number;
  seasonid?: number;
  fromdate?: Date;
  todate?: Date;
  createdby?: number;
  modifiedby?: number;
}