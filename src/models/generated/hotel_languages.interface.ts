/**
 * HotelLanguages Model Interfaces
 * Database table: hotelLanguages
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelLanguages {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  status?: string;
  isdefault?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateHotelLanguages {
  hotelid?: number;
  languageid?: number;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateHotelLanguages {
  hotelid?: number;
  languageid?: number;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
