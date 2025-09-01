/**
 * BillingGeneratelog Model Interfaces
 * Database table: billingGeneratelog
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingGeneratelog {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingmonth?: string;
  billingtype?: number;
  status?: string;
  faileddescription?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
}

// Create interface - for new entity creation
export interface ICreateBillingGeneratelog {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingmonth?: string;
  billingtype?: number;
  status?: string;
  faileddescription?: string;
  createdby?: number;
  updatedon?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingGeneratelog {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  billingmonth?: string;
  billingtype?: number;
  status?: string;
  faileddescription?: string;
  createdby?: number;
  updatedon?: Date;
}
