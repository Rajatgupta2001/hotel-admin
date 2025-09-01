/**
 * RoomsHistory Model
 * Database table: roomshistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRoomsHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  floorid?: number;
  blockid?: number;
  pmtypeid?: number;
  rmnameorno?: string;
  description?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servmdate?: Date;
  status?: string;
  refid?: number;
}

export interface ICreateRoomsHistory {
  hotelid?: number;
  floorid?: number;
  blockid?: number;
  pmtypeid?: number;
  rmnameorno?: string;
  description?: string;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
}
export interface IUpdateRoomsHistory {
  hotelid?: number;
  floorid?: number;
  blockid?: number;
  pmtypeid?: number;
  rmnameorno?: string;
  description?: string;
  modifiedby?: number;
  servmdate?: Date;
  status?: string;
  refid?: number;
}