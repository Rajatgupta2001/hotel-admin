/**
 * XerpAccountMaster Model Interfaces
 * Database table: xerpAccountMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IXerpAccountMaster {
  id?: number;  // Primary key - auto-generated
  acccode?: string;
  type?: string;
  description?: string;
  account?: string;
  perhotel?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateXerpAccountMaster {
  acccode?: string;
  type?: string;
  description?: string;
  account?: string;
  perhotel?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateXerpAccountMaster {
  acccode?: string;
  type?: string;
  description?: string;
  account?: string;
  perhotel?: number;
}
