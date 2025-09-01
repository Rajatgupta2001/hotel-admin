/**
 * HotelBillinglead Model
 * Database table: hotelbillinglead
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelBillinglead {
  id?: string;  // Primary key - auto-generated
  hotelid?: string;
  servicemasterid?: string;
  leadid?: string;
  remarks?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateHotelBillinglead {
  hotelid?: string;
  servicemasterid?: string;
  leadid?: string;
  remarks?: string;
}
export interface IUpdateHotelBillinglead {
  hotelid?: string;
  servicemasterid?: string;
  leadid?: string;
  remarks?: string;
}