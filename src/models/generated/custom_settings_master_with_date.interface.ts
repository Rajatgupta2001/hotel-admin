/**
 * CustomSettingsMasterWithDate Model Interfaces
 * Database table: customSettingsMasterWithDate
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICustomSettingsMasterWithDate {
  key?: string;  // Primary key - auto-generated
  title?: string;
  description?: string;
  type: string;  // Required
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;  // Default: 0
  minlength?: number;
  maxlength?: number;
  servcdate?: Date;  // Service date
  orderby?: number;
  status?: string;  // Default: 'A'
  settingtype?: string;  // Default: text("'ADMIN'"
  submoduletype: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateCustomSettingsMasterWithDate {
  title?: string;
  description?: string;
  type: string;
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;
  minlength?: number;
  maxlength?: number;
  orderby?: number;
  status?: string;
  settingtype?: string;
  submoduletype: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCustomSettingsMasterWithDate {
  title?: string;
  description?: string;
  type?: string;
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;
  minlength?: number;
  maxlength?: number;
  orderby?: number;
  status?: string;
  settingtype?: string;
  submoduletype?: string;
}
