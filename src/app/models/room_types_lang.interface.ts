/**
 * RoomTypesLang Model
 * Database table: roomtypeslang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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