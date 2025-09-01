/**
 * BillingExtensionUser Model Interfaces
 * Database table: billingExtensionUser
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingExtensionUser {
  id?: string;  // Primary key - auto-generated
  hotelid: string;  // Required
  userid: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateBillingExtensionUser {
  hotelid: string;
  userid: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingExtensionUser {
  hotelid?: string;
  userid?: string;
}
