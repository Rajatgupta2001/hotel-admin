/**
 * CustomSettingsMasterWithDate Model
 * Database table: customsettingsmasterwithdate
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomSettingsMasterWithDate {
  key?: string;
  title?: string;
  description?: string;
  type?: string;
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;
  minlength?: number;
  maxlength?: number;
  servcdate?: Date;  // Service date - auto-populated
  orderby?: number;
  status?: Date;
  settingtype?: string;
  submoduletype?: string;
}

export interface ICreateCustomSettingsMasterWithDate {
  key?: string;
  title?: string;
  description?: string;
  type?: string;
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;
  minlength?: number;
  maxlength?: number;
  orderby?: number;
  status?: Date;
  settingtype?: string;
  submoduletype?: string;
}
export interface IUpdateCustomSettingsMasterWithDate {
  key?: string;
  title?: string;
  description?: string;
  type?: string;
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;
  minlength?: number;
  maxlength?: number;
  orderby?: number;
  status?: Date;
  settingtype?: string;
  submoduletype?: string;
}