/**
 * HotelCurrencies Model
 * Database table: hotelcurrencies
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IHotelCurrencies {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  currid?: number;
  currname?: string;
  decimal?: string;
  symbol?: string;
  currshortname?: string;
  precision?: number;
  crncyrate?: number;
  buffer?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  denomination?: Date;
}

export interface ICreateHotelCurrencies {
  hotelid?: number;
  currid?: number;
  currname?: string;
  decimal?: string;
  symbol?: string;
  currshortname?: string;
  precision?: number;
  crncyrate?: number;
  buffer?: number;
  createdby?: Date;
  status?: string;
  modifiedby?: number;
  denomination?: Date;
}
export interface IUpdateHotelCurrencies {
  hotelid?: number;
  currid?: number;
  currname?: string;
  decimal?: string;
  symbol?: string;
  currshortname?: string;
  precision?: number;
  crncyrate?: number;
  buffer?: number;
  createdby?: Date;
  status?: string;
  modifiedby?: number;
  denomination?: Date;
}