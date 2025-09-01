/**
 * ContactInfoMasterLang Model Interfaces
 * Database table: contactInfoMaster_lang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IContactInfoMasterLang {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  fname?: string;
  lname?: string;
}

// Create interface - for new entity creation
export interface ICreateContactInfoMasterLang {
  hotelid: number;
  fname?: string;
  lname?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateContactInfoMasterLang {
  hotelid?: number;
  fname?: string;
  lname?: string;
}
