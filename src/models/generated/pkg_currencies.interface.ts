/**
 * PkgCurrencies Model Interfaces
 * Database table: pkgCurrencies
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPkgCurrencies {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  pkgid: number;  // Required
  currencyid?: number;
  convertionrate?: number;  // Default: text("'1.0000000000'"
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreatePkgCurrencies {
  hotelid: number;
  pkgid: number;
  currencyid?: number;
  convertionrate?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePkgCurrencies {
  hotelid?: number;
  pkgid?: number;
  currencyid?: number;
  convertionrate?: number;
}
