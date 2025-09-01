/**
 * HotelAgreement Model
 * Database table: hotelagreement
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelAgreement {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  hotelid?: number;
  page?: string;
  agreetype?: string;
  agree?: number;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateHotelAgreement {
  compid?: number;
  userid?: number;
  hotelid?: number;
  page?: string;
  agreetype?: string;
  agree?: number;
}
export interface IUpdateHotelAgreement {
  compid?: number;
  userid?: number;
  hotelid?: number;
  page?: string;
  agreetype?: string;
  agree?: number;
}