/**
 * HotelLanguages Model
 * Database table: hotellanguages
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelLanguages {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  status?: string;
  isdefault?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateHotelLanguages {
  hotelid?: number;
  languageid?: number;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateHotelLanguages {
  hotelid?: number;
  languageid?: number;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}