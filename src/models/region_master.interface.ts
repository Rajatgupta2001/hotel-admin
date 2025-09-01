/**
 * RegionMaster Model
 * Database table: regionmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRegionMaster {
  id?: number;  // Primary key - auto-generated
  title?: string;
  code?: string;
  regionid?: number;
  countryid?: string;
  level?: number;
  languageid?: number;
  currencyid?: string;
  timezoneid?: string;
  createdon?: Date;  // Auto-populated timestamp
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateRegionMaster {
  title?: string;
  code?: string;
  regionid?: number;
  countryid?: string;
  level?: number;
  languageid?: number;
  currencyid?: string;
  timezoneid?: string;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateRegionMaster {
  title?: string;
  code?: string;
  regionid?: number;
  countryid?: string;
  level?: number;
  languageid?: number;
  currencyid?: string;
  timezoneid?: string;
  status?: string;
  modifiedby?: number;
}