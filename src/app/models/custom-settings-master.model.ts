/**
 * CustomSettingsMaster Model
 * Database table: customSettingsMaster
 */
export interface CustomSettingsMaster {
  key: string; // String(50)
  title?: string; // String(500)
  description?: string; // String(500)
  type: 'dropdown' | 'text' | 'number' | 'checkbox' | 'textarea'; // Enum
  possiblevalues?: string; // String(4000)
  defaultvalue?: string; // String(50)
  isrequired?: number; // Integer
  minlength?: number; // Integer
  maxlength?: number; // Integer
  orderby?: number; // Integer
  status?: string; // String(1)
  settingtype?: 'HMSADMIN' | 'HOTEL' | 'GLOBAL'; // Enum
  submoduletype: string; // String(200)
  category?: string; // String(100)
  helpdetails?: string; // Text
}

export interface CreateCustomSettingsMaster {
  key: string;
  title?: string;
  description?: string;
  type: 'dropdown' | 'text' | 'number' | 'checkbox' | 'textarea';
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;
  minlength?: number;
  maxlength?: number;
  orderby?: number;
  status?: string;
  settingtype?: 'HMSADMIN' | 'HOTEL' | 'GLOBAL';
  submoduletype: string;
  category?: string;
  helpdetails?: string;
}

export interface UpdateCustomSettingsMaster {
  key?: string;
  title?: string;
  description?: string;
  type?: 'dropdown' | 'text' | 'number' | 'checkbox' | 'textarea';
  possiblevalues?: string;
  defaultvalue?: string;
  isrequired?: number;
  minlength?: number;
  maxlength?: number;
  orderby?: number;
  status?: string;
  settingtype?: 'HMSADMIN' | 'HOTEL' | 'GLOBAL';
  submoduletype?: string;
  category?: string;
  helpdetails?: string;
}
