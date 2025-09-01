/**
 * UserTypes Model
 * Database table: usertypes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IUserTypes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  title?: string;
  description?: string;
  defaultmodule?: number;
  housekeeper?: number;
  adminconsolekeeper?: number;
  nightauditconsolekeeper?: number;
  frontdeskkeeper?: number;
  accountkeeper?: number;
  reportconsolekeeper?: number;
  housekeeperancper?: string;
  adminconsoleancper?: string;
  frontdeskancper?: string;
  advancepostingkeeper?: number;
  hmsadminconsole?: number;
  resolution?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateUserTypes {
  hotelid?: number;
  title?: string;
  description?: string;
  defaultmodule?: number;
  housekeeper?: number;
  adminconsolekeeper?: number;
  nightauditconsolekeeper?: number;
  frontdeskkeeper?: number;
  accountkeeper?: number;
  reportconsolekeeper?: number;
  housekeeperancper?: string;
  adminconsoleancper?: string;
  frontdeskancper?: string;
  advancepostingkeeper?: number;
  hmsadminconsole?: number;
  resolution?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateUserTypes {
  hotelid?: number;
  title?: string;
  description?: string;
  defaultmodule?: number;
  housekeeper?: number;
  adminconsolekeeper?: number;
  nightauditconsolekeeper?: number;
  frontdeskkeeper?: number;
  accountkeeper?: number;
  reportconsolekeeper?: number;
  housekeeperancper?: string;
  adminconsoleancper?: string;
  frontdeskancper?: string;
  advancepostingkeeper?: number;
  hmsadminconsole?: number;
  resolution?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}