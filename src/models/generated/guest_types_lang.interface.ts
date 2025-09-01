/**
 * GuestTypesLang Model Interfaces
 * Database table: guestTypesLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestTypesLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  description?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestTypesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGuestTypesLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  title?: string;
  description?: Date;
  createdby?: number;
  modifiedby?: number;
}
