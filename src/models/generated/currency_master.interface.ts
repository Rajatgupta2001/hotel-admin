/**
 * CurrencyMaster Model Interfaces
 * Database table: currencyMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICurrencyMaster {
  id?: number;  // Primary key - auto-generated
  currname: string;  // Required
  symbol: string;  // Required
  currshortname: string;  // Required
  decimal: string;  // Required
  precision: number;  // Required
  crncyrate: number;  // Required
  buffer: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  smallname?: string;
}

// Create interface - for new entity creation
export interface ICreateCurrencyMaster {
  currname: string;
  symbol: string;
  currshortname: string;
  decimal: string;
  precision: number;
  crncyrate: number;
  buffer: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  smallname?: string;
}

// Update interface - for entity updates (all fields optional)
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
