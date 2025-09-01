/**
 * CompanyEventSettings Model Interfaces
 * Database table: companyEventSettings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICompanyEventSettings {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  key?: string;
  valuejson?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCompanyEventSettings {
  compid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCompanyEventSettings {
  compid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}
