/**
 * CrsCurrency Model Interfaces
 * Database table: crsCurrency
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICrsCurrency {
  id?: string;  // Primary key - auto-generated
  apiid?: number;
  currencyid?: number;
  currencycode?: string;
  currencyname: string;  // Required
  decimal: string;  // Required
  symbol: string;  // Required
  precision: number;  // Required
  crncyrate: number;  // Required
  buffer: number;  // Required
  status?: string;
  isdefault?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCrsCurrency {
  apiid?: number;
  currencyid?: number;
  currencycode?: string;
  currencyname: string;
  decimal: string;
  symbol: string;
  precision: number;
  crncyrate: number;
  buffer: number;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCrsCurrency {
  apiid?: number;
  currencyid?: number;
  currencycode?: string;
  currencyname?: string;
  decimal?: string;
  symbol?: string;
  precision?: number;
  crncyrate?: number;
  buffer?: number;
  status?: string;
  isdefault?: number;
  createdby?: number;
  modifiedby?: number;
}
