/**
 * ReservationsData Model
 * Database table: reservationsdata
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReservationsData {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  keyrefid?: number;
  key?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateReservationsData {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  keyrefid?: number;
  key?: string;
  value?: string;
  createdby?: number;
}
export interface IUpdateReservationsData {
  hotelid?: number;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  keyrefid?: number;
  key?: string;
  value?: string;
  createdby?: number;
}