/**
 * GuestsPreference Model
 * Database table: guestspreference
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestsPreference {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  guestid?: string;
  prefid?: number;
  prefernces?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGuestsPreference {
  hotelid?: number;
  guestid?: string;
  prefid?: number;
  prefernces?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGuestsPreference {
  hotelid?: number;
  guestid?: string;
  prefid?: number;
  prefernces?: string;
  createdby?: number;
  modifiedby?: number;
}