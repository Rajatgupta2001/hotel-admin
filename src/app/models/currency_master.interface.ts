/**
 * CurrencyMaster Model
 * Database table: currencymaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICurrencyMaster {
  id?: number;  // Primary key - auto-generated
  currname?: string;
  symbol?: string;
  currshortname?: string;
  decimal?: string;
  precision?: number;
  crncyrate?: number;
  buffer?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  smallname?: string;
}

export interface ICreateCurrencyMaster {
  currname?: string;
  symbol?: string;
  currshortname?: string;
  decimal?: string;
  precision?: number;
  crncyrate?: number;
  buffer?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  smallname?: string;
}
export interface IUpdateCurrencyMaster {
  currname?: string;
  symbol?: string;
  currshortname?: string;
  decimal?: string;
  precision?: number;
  crncyrate?: number;
  buffer?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  smallname?: string;
}