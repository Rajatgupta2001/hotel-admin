/**
 * HotelHighWkDays Model
 * Database table: hotelhighwkdays
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelHighWkDays {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  weekday?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelHighWkDays {
  hotelid?: number;
  weekday?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHotelHighWkDays {
  hotelid?: number;
  weekday?: number;
  createdby?: number;
  modifiedby?: number;
}