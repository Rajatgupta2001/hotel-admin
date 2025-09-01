/**
 * GdsHotelAssciation Model
 * Database table: gdshotelassciation
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsHotelAssciation {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdsid?: number;
  gdshotelid?: number;
  status?: string;
}

export interface ICreateGdsHotelAssciation {
  hotelid?: number;
  gdsid?: number;
  gdshotelid?: number;
  status?: string;
}
export interface IUpdateGdsHotelAssciation {
  hotelid?: number;
  gdsid?: number;
  gdshotelid?: number;
  status?: string;
}