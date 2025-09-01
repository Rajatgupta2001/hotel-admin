/**
 * HotelDeleteLog Model
 * Database table: hoteldeletelog
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelDeleteLog {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  nadate?: Date;
  ischangednadate?: Date;
  verifycode?: string;
  description?: string;
  ip?: string;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateHotelDeleteLog {
  hotelid?: number;
  nadate?: Date;
  ischangednadate?: Date;
  verifycode?: string;
  description?: string;
  ip?: string;
  status?: string;
}
export interface IUpdateHotelDeleteLog {
  hotelid?: number;
  nadate?: Date;
  ischangednadate?: Date;
  verifycode?: string;
  description?: string;
  ip?: string;
  status?: string;
}