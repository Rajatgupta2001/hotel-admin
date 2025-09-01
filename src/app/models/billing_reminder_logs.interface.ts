/**
 * BillingReminderLogs Model
 * Database table: billingreminderlogs
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingReminderLogs {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  groupid?: number;
  grouptype?: string;
  billingledgermasterid?: number;
  templateid?: number;
  billingremindermasterid?: number;
  sentorignore?: number;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateBillingReminderLogs {
  hotelid?: number;
  groupid?: number;
  grouptype?: string;
  billingledgermasterid?: number;
  templateid?: number;
  billingremindermasterid?: number;
  sentorignore?: number;
}
export interface IUpdateBillingReminderLogs {
  hotelid?: number;
  groupid?: number;
  grouptype?: string;
  billingledgermasterid?: number;
  templateid?: number;
  billingremindermasterid?: number;
  sentorignore?: number;
}