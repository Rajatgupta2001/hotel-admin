/**
 * CompanyEventSettings Model
 * Database table: companyeventsettings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICompanyEventSettings {
  id?: number;  // Primary key - auto-generated
  compid?: number;
  key?: string;
  valuejson?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCompanyEventSettings {
  compid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCompanyEventSettings {
  compid?: number;
  key?: string;
  valuejson?: string;
  createdby?: number;
  modifiedby?: number;
}