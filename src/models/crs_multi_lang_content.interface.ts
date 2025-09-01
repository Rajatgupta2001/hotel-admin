/**
 * CrsMultiLangContent Model
 * Database table: crsmultilangcontent
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsMultiLangContent {
  apiid?: number;
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

export interface ICreateCrsMultiLangContent {
  apiid?: number;
  languageid?: number;
  refid?: number;
  tablename?: string;
  contentxml?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCrsMultiLangContent {
  apiid?: number;
  languageid?: number;
  refid?: number;
  tablename?: string;
  contentxml?: Date;
  createdby?: number;
  modifiedby?: number;
}