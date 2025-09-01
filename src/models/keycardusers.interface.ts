/**
 * Keycardusers Model
 * Database table: keycardusers
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IKeycardusers {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  devicecode?: string;
  deviceuser: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Required
}

export interface ICreateKeycardusers {
  hotelid: number;
  devicecode?: string;
  deviceuser: number;
  updatedon?: Date;
}
export interface IUpdateKeycardusers {
  hotelid?: number;
  devicecode?: string;
  deviceuser?: number;
  updatedon?: Date;
}