/**
 * BillingReminderMaster Model Interfaces
 * Database table: billingReminderMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingReminderMaster {
  id?: number;  // Primary key - auto-generated
  templateid?: number;
  billgeneratedelapseddays?: number;
  businesstype?: string;
  pmntchargetype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateBillingReminderMaster {
  templateid?: number;
  billgeneratedelapseddays?: number;
  businesstype?: string;
  pmntchargetype?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingReminderMaster {
  templateid?: number;
  billgeneratedelapseddays?: number;
  businesstype?: string;
  pmntchargetype?: string;
  createdby?: number;
}
