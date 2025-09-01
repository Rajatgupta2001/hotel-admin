/**
 * CustomSettingsMaster Model Interfaces
 * Database table: customSettingsMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICustomSettingsMaster {
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
  settingtype?: string;
  submoduletype: string;  // Required
  category?: string;
  helpdetails?: string;
}

// Create interface - for new entity creation
export interface ICreateCustomSettingsMaster {
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
  category?: string;
  helpdetails?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCustomSettingsMaster {
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
  category?: string;
  helpdetails?: string;
}
