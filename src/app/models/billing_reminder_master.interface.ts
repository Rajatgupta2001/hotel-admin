/**
 * BillingReminderMaster Model
 * Database table: billingremindermaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingReminderMaster {
  id?: number;  // Primary key - auto-generated
  templateid?: number;
  billgeneratedelapseddays?: number;
  businesstype?: string;
  pmntchargetype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateBillingReminderMaster {
  templateid?: number;
  billgeneratedelapseddays?: number;
  businesstype?: string;
  pmntchargetype?: string;
  createdby?: number;
}
export interface IUpdateBillingReminderMaster {
  templateid?: number;
  billgeneratedelapseddays?: number;
  businesstype?: string;
  pmntchargetype?: string;
  createdby?: number;
}