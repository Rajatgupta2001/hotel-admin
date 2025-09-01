/**
 * Countries Model Interfaces
 * Database table: countries
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICountries {
  countriesId?: number;  // Primary key - auto-generated
  countriesName?: string;  // Default: text("''"
  countriesIsoCode2?: string;  // Default: text("''"
  countriesIsoCode3?: string;  // Default: text("''"
  addressFormatId?: number;  // Primary key - auto-generated
  currshortname?: string;
  status: string;  // Required
  zendcode?: string;
}

// Create interface - for new entity creation
export interface ICreateCountries {
  countriesName?: string;
  countriesIsoCode2?: string;
  countriesIsoCode3?: string;
  currshortname?: string;
  status: string;
  zendcode?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCountries {
  countriesName?: string;
  countriesIsoCode2?: string;
  countriesIsoCode3?: string;
  currshortname?: string;
  status?: string;
  zendcode?: string;
}
