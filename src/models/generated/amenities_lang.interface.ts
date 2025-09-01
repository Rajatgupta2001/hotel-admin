/**
 * AmenitiesLang Model Interfaces
 * Database table: amenitiesLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
