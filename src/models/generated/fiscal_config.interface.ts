/**
 * FiscalConfig Model Interfaces
 * Database table: fiscalConfig
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFiscalConfig {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  status?: string;
}

// Create interface - for new entity creation
export interface ICreateFiscalConfig {
  hotelid?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFiscalConfig {
  hotelid?: number;
  status?: string;
}
