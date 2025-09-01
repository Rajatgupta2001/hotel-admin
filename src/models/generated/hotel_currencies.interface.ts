/**
 * HotelCurrencies Model Interfaces
 * Database table: hotelCurrencies
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IHotelCurrencies {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  currid: number;  // Required
  currname: string;  // Required
  decimal: string;  // Required
  symbol: string;  // Required
  currshortname?: string;
  precision: number;  // Required
  crncyrate: number;  // Required
  buffer: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  denomination?: any;
}

// Create interface - for new entity creation
export interface ICreateHotelCurrencies {
  hotelid: number;
  currid: number;
  currname: string;
  decimal: string;
  symbol: string;
  currshortname?: string;
  precision: number;
  crncyrate: number;
  buffer: number;
  createdby?: Date;
  status: string;
  modifiedby?: number;
  denomination?: any;
}

// Update interface - for entity updates (all fields optional)
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
  denomination?: any;
}
