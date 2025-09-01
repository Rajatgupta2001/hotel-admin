/**
 * AmenitiesLang Model
 * Database table: amenitieslang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAmenitiesLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAmenitiesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateAmenitiesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  shortname?: string;
  imagename?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}