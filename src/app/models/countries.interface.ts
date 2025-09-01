/**
 * Countries Model
 * Database table: countries
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICountries {
  countriesId?: number;
  countriesName?: string;
  countriesIsoCode2?: string;
  countriesIsoCode3?: string;
  addressFormatId?: number;
  currshortname?: string;
  status?: string;
  zendcode?: string;
}

export interface ICreateCountries {
  countriesId?: number;
  countriesName?: string;
  countriesIsoCode2?: string;
  countriesIsoCode3?: string;
  addressFormatId?: number;
  currshortname?: string;
  status?: string;
  zendcode?: string;
}
export interface IUpdateCountries {
  countriesId?: number;
  countriesName?: string;
  countriesIsoCode2?: string;
  countriesIsoCode3?: string;
  addressFormatId?: number;
  currshortname?: string;
  status?: string;
  zendcode?: string;
}