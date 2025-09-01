/**
 * WsAccess Model Interfaces
 * Database table: wsAccess
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWsAccess {
  id?: string;  // Primary key - auto-generated
  apiid: string;  // Required
  key: string;  // Required
  secret: string;  // Required
  sessionid: string;  // Required
  hotelpermissionid?: number;
  loginmasterid?: number;
  applicationid?: string;
  deviceinfo?: string;
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateWsAccess {
  apiid: string;
  key: string;
  secret: string;
  sessionid: string;
  hotelpermissionid?: number;
  loginmasterid?: number;
  applicationid?: string;
  deviceinfo?: string;
}

// Update interface - for entity updates (all fields optional)
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
