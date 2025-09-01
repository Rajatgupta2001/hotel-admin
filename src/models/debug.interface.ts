/**
 * Debug Model
 * Database table: debug
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDebug {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Default: 0 (backend)
  type?: string;
  comment?: string;
  servcdate?: Date;  // Service date - auto-populated
  startdate?: Date;
}

export interface ICreateDebug {
  hotelid?: number;
  type?: string;
  comment?: string;
  startdate?: Date;
}
export interface IUpdateDebug {
  hotelid?: number;
  type?: string;
  comment?: string;
  startdate?: Date;
}