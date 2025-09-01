/**
 * CurrencyMasterNew Model Interfaces
 * Database table: currencyMasterNew
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICurrencyMasterNew {
  currname: string;  // Required
  currsortname: string;  // Required
  deimal: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateCurrencyMasterNew {
  currname: string;
  currsortname: string;
  deimal: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCurrencyMasterNew {
  currname?: string;
  currsortname?: string;
  deimal?: string;
}
