/**
 * BillingService Model Interfaces
 * Database table: billingService
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingService {
  id?: number;  // Primary key - auto-generated
  billingmasterid: number;  // Required
  name: string;  // Required
  code: string;  // Required
  status?: string;  // Default: 'A'
  type?: string;  // Default: text("'D'"
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateBillingService {
  billingmasterid: number;
  name: string;
  code: string;
  status?: string;
  type?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingService {
  billingmasterid?: number;
  name?: string;
  code?: string;
  status?: string;
  type?: string;
}
