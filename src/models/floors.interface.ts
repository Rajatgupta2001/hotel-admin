/**
 * Floors Model
 * Database table: floors
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFloors {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  floorname?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
}

export interface ICreateFloors {
  hotelid: number;
  floorname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateFloors {
  hotelid?: number;
  floorname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}