/**
 * ChangesFlags Model Interfaces
 * Database table: changesFlags
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IChangesFlags {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  section?: string;
  ischanged?: number;  // Default: 0
  lastupdatedon?: Date;
  lastrefreshedon?: Date;
}

// Create interface - for new entity creation
export interface ICreateChangesFlags {
  hotelid: number;
  section?: string;
  ischanged?: number;
  lastupdatedon?: Date;
  lastrefreshedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateChangesFlags {
  hotelid?: number;
  section?: string;
  ischanged?: number;
  lastupdatedon?: Date;
  lastrefreshedon?: Date;
}
