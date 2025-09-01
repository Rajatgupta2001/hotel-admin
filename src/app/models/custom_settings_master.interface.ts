/**
 * CustomSettingsMaster Model
 * Database table: customsettingsmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomSettingsMaster {
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
  status?: string;
  settingtype?: string;
  submoduletype?: string;
  category?: string;
  helpdetails?: string;
}

export interface ICreateCustomSettingsMaster {
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
  status?: string;
  settingtype?: string;
  submoduletype?: string;
  category?: string;
  helpdetails?: string;
}
export interface IUpdateCustomSettingsMaster {
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
  status?: string;
  settingtype?: string;
  submoduletype?: string;
  category?: string;
  helpdetails?: string;
}