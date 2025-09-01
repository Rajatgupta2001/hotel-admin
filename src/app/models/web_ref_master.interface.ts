/**
 * WebRefMaster Model
 * Database table: webrefmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebRefMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  webrefid?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateWebRefMaster {
  hotelid?: number;
  webrefid?: number;
}
export interface IUpdateWebRefMaster {
  hotelid?: number;
  webrefid?: number;
}