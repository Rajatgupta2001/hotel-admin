/**
 * AccountManagerHotels Model
 * Database table: accountmanagerhotels
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountManagerHotels {
  userid?: string;
  hotelid?: number;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateAccountManagerHotels {
  userid?: string;
  hotelid?: number;
}
export interface IUpdateAccountManagerHotels {
  userid?: string;
  hotelid?: number;
}