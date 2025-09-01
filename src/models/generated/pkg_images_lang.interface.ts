/**
 * PkgImagesLang Model Interfaces
 * Database table: pkgImagesLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgImagesLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  imagename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePkgImagesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  imagename?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgImagesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  imagename?: string;
  createdby?: number;
}
