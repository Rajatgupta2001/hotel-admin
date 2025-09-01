import type { IReservation } from './reservations.interface';
/**
 * ReservationIdMaster Model
 * Database table: reservationidmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReservationIdMaster {
  hotelId?: number;
  rsvId?: number;
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateReservationIdMaster {
  hotelId?: number;
  rsvId?: number;
}
export interface IUpdateReservationIdMaster {
  hotelId?: number;
  rsvId?: number;
}