/**
 * RoomTypesLang Model Interfaces
 * Database table: roomTypesLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomTypesLang {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  refid?: string;
  languageid?: number;
  title?: string;
  acronym?: string;
  description?: Date;
  imagename?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRoomTypesLang {
  hotelid?: number;
  refid?: string;
  languageid?: number;
  title?: string;
  acronym?: string;
  description?: Date;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomTypesLang {
  hotelid?: number;
  refid?: string;
  languageid?: number;
  title?: string;
  acronym?: string;
  description?: Date;
  imagename?: string;
  createdby?: number;
  modifiedby?: number;
}
