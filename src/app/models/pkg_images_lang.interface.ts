/**
 * PkgImagesLang Model
 * Database table: pkgimageslang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgImagesLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  imagename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePkgImagesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  imagename?: string;
  createdby?: number;
}
export interface IUpdatePkgImagesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  imagename?: string;
  createdby?: number;
}