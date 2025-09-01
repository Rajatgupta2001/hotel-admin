/**
 * CrsCurrency Model
 * Database table: crscurrency
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICrsCurrency {
  id?: string;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCrsCurrency {
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