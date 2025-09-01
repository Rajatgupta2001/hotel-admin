/**
 * BillingServiceMaster Model Interfaces
 * Database table: billingServiceMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingServiceMaster {
  id?: number;  // Primary key - auto-generated
  name: string;  // Required
  code: string;  // Required
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateBillingServiceMaster {
  name: string;
  code: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingServiceMaster {
  name?: string;
  code?: string;
  status?: string;
}
