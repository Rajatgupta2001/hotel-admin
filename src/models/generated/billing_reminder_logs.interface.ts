/**
 * BillingReminderLogs Model Interfaces
 * Database table: billingReminderLogs
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingReminderLogs {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  grouptype?: string;
  billingledgermasterid: number;  // Required
  templateid?: number;
  billingremindermasterid: number;  // Required
  sentorignore: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateBillingReminderLogs {
  hotelid?: number;
  groupid?: number;
  grouptype?: string;
  billingledgermasterid: number;
  templateid?: number;
  billingremindermasterid: number;
  sentorignore: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingReminderLogs {
  hotelid?: number;
  groupid?: number;
  grouptype?: string;
  billingledgermasterid?: number;
  templateid?: number;
  billingremindermasterid?: number;
  sentorignore?: number;
}
