/**
 * HotelAvailabilityLock Model
 * Database table: hotelavailabilitylock
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelAvailabilityLock {
  hotelid?: number;
  locktime?: Date;
  isautonastarted?: number;
  locktype?: string;
}

export interface ICreateHotelAvailabilityLock {
  hotelid?: number;
  locktime?: Date;
  isautonastarted?: number;
  locktype?: string;
}
export interface IUpdateHotelAvailabilityLock {
  hotelid?: number;
  locktime?: Date;
  isautonastarted?: number;
  locktype?: string;
}