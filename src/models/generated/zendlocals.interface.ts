/**
 * Zendlocals Model Interfaces
 * Database table: zendlocals
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IZendlocals {
  id?: number;  // Primary key - auto-generated
  langcode?: string;
  countrycode?: string;
  zendlocal?: string;
}

// Create interface - for new entity creation
export interface ICreateZendlocals {
  langcode?: string;
  countrycode?: string;
  zendlocal?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateZendlocals {
  langcode?: string;
  countrycode?: string;
  zendlocal?: string;
}
