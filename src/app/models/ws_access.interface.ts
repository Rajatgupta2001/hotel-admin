/**
 * WsAccess Model
 * Database table: wsaccess
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWsAccess {
  id?: string;  // Primary key - auto-generated
  apiid?: string;
  key?: string;
  secret?: string;
  sessionid?: string;
  hotelpermissionid?: number;
  loginmasterid?: number;
  applicationid?: string;
  deviceinfo?: string;
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateWsAccess {
  apiid?: string;
  key?: string;
  secret?: string;
  sessionid?: string;
  hotelpermissionid?: number;
  loginmasterid?: number;
  applicationid?: string;
  deviceinfo?: string;
}
export interface IUpdateWsAccess {
  apiid?: string;
  key?: string;
  secret?: string;
  sessionid?: string;
  hotelpermissionid?: number;
  loginmasterid?: number;
  applicationid?: string;
  deviceinfo?: string;
}