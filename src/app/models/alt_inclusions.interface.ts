/**
 * AltInclusions Model
 * Database table: altinclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAltInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  inclid?: number;
  altinclid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAltInclusions {
  hotelid?: number;
  inclid?: number;
  altinclid?: number;
  createdby?: number;
}
export interface IUpdateAltInclusions {
  hotelid?: number;
  inclid?: number;
  altinclid?: number;
  createdby?: number;
}