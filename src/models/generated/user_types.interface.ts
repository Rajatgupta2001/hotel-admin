/**
 * UserTypes Model Interfaces
 * Database table: userTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IUserTypes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  description: string;  // Required
  defaultmodule?: number;
  housekeeper?: number;  // Default: 0
  adminconsolekeeper?: number;  // Default: 0
  nightauditconsolekeeper?: number;  // Default: 0
  frontdeskkeeper?: number;  // Default: 0
  accountkeeper?: number;  // Default: text("'-10'"
  reportconsolekeeper?: number;  // Default: 0
  housekeeperancper?: string;
  adminconsoleancper?: string;
  frontdeskancper?: string;
  advancepostingkeeper?: number;  // Default: 0
  hmsadminconsole?: number;
  resolution?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateUserTypes {
  hotelid: number;
  title: string;
  description: string;
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
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
