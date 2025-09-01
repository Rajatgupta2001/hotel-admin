/**
 * CustomSettings Model
 * Database table: customsettings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomSettings {
  id?: string;  // Primary key - auto-generated
  refid?: number;
  reftype?: string;
  key?: string;
  value?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: Date;
}

export interface ICreateCustomSettings {
  refid?: number;
  reftype?: string;
  key?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
  status?: Date;
}
export interface IUpdateCustomSettings {
  refid?: number;
  reftype?: string;
  key?: string;
  value?: string;
  createdby?: number;
  modifiedby?: number;
  status?: Date;
}