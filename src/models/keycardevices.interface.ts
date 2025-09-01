/**
 * Keycardevices Model
 * Database table: keycardevices
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IKeycardevices {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  devicecode?: string;
  devicename?: string;
  deviceserverip?: string;
  deviceserverport?: string;
  status?: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Required
}

export interface ICreateKeycardevices {
  hotelid: number;
  devicecode?: string;
  devicename?: string;
  deviceserverip?: string;
  deviceserverport?: string;
  status?: Date;
  updatedon?: Date;
}
export interface IUpdateKeycardevices {
  hotelid?: number;
  devicecode?: string;
  devicename?: string;
  deviceserverip?: string;
  deviceserverport?: string;
  status?: Date;
  updatedon?: Date;
}