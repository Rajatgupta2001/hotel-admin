/**
 * LogDeletedHotel Model
 * Database table: logdeletedhotel
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILogDeletedHotel {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  nadate?: Date;
  changenadate?: Date;
  verifycode?: string;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateLogDeletedHotel {
  hotelid?: number;
  nadate?: Date;
  changenadate?: Date;
  verifycode?: string;
}
export interface IUpdateLogDeletedHotel {
  hotelid?: number;
  nadate?: Date;
  changenadate?: Date;
  verifycode?: string;
}