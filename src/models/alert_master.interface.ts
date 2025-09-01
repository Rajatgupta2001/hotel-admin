/**
 * AlertMaster Model
 * Database table: alertmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAlertMaster {
  id?: number;  // Primary key - auto-generated
  eventtype?: string;
  title?: string;
  subscribertype?: Date;
  addedon?: Date;
  addedby?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: string;  // User ID reference
  status?: Date;
}

export interface ICreateAlertMaster {
  eventtype?: string;
  title?: string;
  subscribertype?: Date;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: Date;
}
export interface IUpdateAlertMaster {
  eventtype?: string;
  title?: string;
  subscribertype?: Date;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: Date;
}