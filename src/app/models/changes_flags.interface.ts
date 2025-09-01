/**
 * ChangesFlags Model
 * Database table: changesflags
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IChangesFlags {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  section?: string;
  ischanged?: number;
  lastupdatedon?: Date;
  lastrefreshedon?: Date;
}

export interface ICreateChangesFlags {
  hotelid?: number;
  section?: string;
  ischanged?: number;
  lastupdatedon?: Date;
  lastrefreshedon?: Date;
}
export interface IUpdateChangesFlags {
  hotelid?: number;
  section?: string;
  ischanged?: number;
  lastupdatedon?: Date;
  lastrefreshedon?: Date;
}