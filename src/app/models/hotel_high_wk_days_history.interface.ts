/**
 * HotelHighWkDaysHistory Model
 * Database table: hotelhighwkdayshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelHighWkDaysHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  weekday?: number;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelHighWkDaysHistory {
  hotelid?: number;
  weekday?: number;
  modifiedby?: number;
}
export interface IUpdateHotelHighWkDaysHistory {
  hotelid?: number;
  weekday?: number;
  modifiedby?: number;
}