/**
 * PreferenceMaster Model
 * Database table: preferencemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPreferenceMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreatePreferenceMaster {
  hotelid?: number;
  title?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdatePreferenceMaster {
  hotelid?: number;
  title?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}