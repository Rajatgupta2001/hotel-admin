/**
 * CompanyEventMaster Model Interfaces
 * Database table: companyEventMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICompanyEventMaster {
  key?: string;  // Primary key - auto-generated
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}

// Create interface - for new entity creation
export interface ICreateCompanyEventMaster {
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCompanyEventMaster {
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}
