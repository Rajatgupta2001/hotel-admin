/**
 * CrsLanguage Model
 * Database table: crslanguage
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsLanguage {
  id?: string;  // Primary key - auto-generated
  apiid?: number;
  languageid?: number;
  languagecode?: string;
  status?: string;
  isdefault?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCrsLanguage {
  apiid?: number;
  languageid?: number;
  languagecode?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCrsLanguage {
  apiid?: number;
  languageid?: number;
  languagecode?: string;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}