/**
 * PkgCurrencies Model
 * Database table: pkgcurrencies
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPkgCurrencies {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  pkgid?: number;
  currencyid?: number;
  convertionrate?: number;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreatePkgCurrencies {
  hotelid?: number;
  pkgid?: number;
  currencyid?: number;
  convertionrate?: number;
}
export interface IUpdatePkgCurrencies {
  hotelid?: number;
  pkgid?: number;
  currencyid?: number;
  convertionrate?: number;
}