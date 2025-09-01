/**
 * SeasonAttributes Model
 * Database table: seasonattributes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISeasonAttributes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  seasonattribute?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateSeasonAttributes {
  hotelid?: number;
  seasonattribute?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateSeasonAttributes {
  hotelid?: number;
  seasonattribute?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}