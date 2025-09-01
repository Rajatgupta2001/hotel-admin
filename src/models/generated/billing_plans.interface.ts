/**
 * BillingPlans Model Interfaces
 * Database table: billingPlans
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingPlans {
  id?: number;  // Primary key - auto-generated
  name: string;  // Required
  code: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateBillingPlans {
  name: string;
  code: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingPlans {
  name?: string;
  code?: string;
}
