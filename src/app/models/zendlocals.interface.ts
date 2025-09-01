/**
 * Zendlocals Model
 * Database table: zendlocals
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IZendlocals {
  id?: number;  // Primary key - auto-generated
  langcode?: string;
  countrycode?: string;
  zendlocal?: string;
}

export interface ICreateZendlocals {
  langcode?: string;
  countrycode?: string;
  zendlocal?: string;
}
export interface IUpdateZendlocals {
  langcode?: string;
  countrycode?: string;
  zendlocal?: string;
}