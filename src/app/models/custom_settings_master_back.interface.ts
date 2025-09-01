/**
 * CustomSettingsMasterBack Model
 * Database table: customsettingsmasterback
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICustomSettingsMasterBack {
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
  category?: string;
  helpdetails?: string;
}

export interface ICreateCustomSettingsMasterBack {
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
  category?: string;
  helpdetails?: string;
}
export interface IUpdateCustomSettingsMasterBack {
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
  category?: string;
  helpdetails?: string;
}