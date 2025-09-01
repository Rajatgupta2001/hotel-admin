/**
 * AlertMaster Model Interfaces
 * Database table: alertMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAlertMaster {
  id?: number;  // Primary key - auto-generated
  eventtype?: string;
  title?: string;
  subscribertype?: string;  // Default: text("'GST'"
  addedon?: Date;
  addedby?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: string;  // User ID reference
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateAlertMaster {
  eventtype?: string;
  title?: string;
  subscribertype?: string;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAlertMaster {
  eventtype?: string;
  title?: string;
  subscribertype?: string;
  addedon?: Date;
  addedby?: string;
  modifiedby?: string;
  status?: string;
}
