/**
 * LanguageMaster Model
 * Database table: languagemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ILanguageMaster {
  id?: number;  // Primary key - auto-generated
  title?: string;
  code?: string;
  createdon?: Date;  // Auto-populated timestamp
  status?: string;
  flagimage?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateLanguageMaster {
  title?: string;
  code?: string;
  status?: string;
  flagimage?: string;
  modifiedby?: number;
}
export interface IUpdateLanguageMaster {
  title?: string;
  code?: string;
  status?: string;
  flagimage?: string;
  modifiedby?: number;
}