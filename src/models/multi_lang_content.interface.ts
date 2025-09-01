/**
 * MultiLangContent Model
 * Database table: multilangcontent
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IMultiLangContent {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  tablename?: string;
  contentxml?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateMultiLangContent {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  tablename?: string;
  contentxml?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateMultiLangContent {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  tablename?: string;
  contentxml?: Date;
  createdby?: number;
  modifiedby?: number;
}