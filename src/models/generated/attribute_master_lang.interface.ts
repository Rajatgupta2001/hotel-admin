/**
 * AttributeMasterLang Model Interfaces
 * Database table: attributeMasterLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAttributeMasterLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAttributeMasterLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAttributeMasterLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  shortname?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}
