/**
 * InclusionsLang Model Interfaces
 * Database table: inclusionsLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IInclusionsLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: string;
  name?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateInclusionsLang {
  hotelid?: number;
  languageid?: number;
  refid?: string;
  name?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateInclusionsLang {
  hotelid?: number;
  languageid?: number;
  refid?: string;
  name?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}
