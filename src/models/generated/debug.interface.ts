/**
 * Debug Model Interfaces
 * Database table: debug
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDebug {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: 0
  type?: string;
  comment?: string;
  servcdate?: Date;  // Service date
  startdate?: Date;
}

// Create interface - for new entity creation
export interface ICreateDebug {
  hotelid?: number;
  type?: string;
  comment?: string;
  startdate?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDebug {
  hotelid?: number;
  type?: string;
  comment?: string;
  startdate?: Date;
}
