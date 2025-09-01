/**
 * BillingPlans Model
 * Database table: billingplans
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingPlans {
  id?: number;  // Primary key - auto-generated
  name?: string;
  code?: string;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateBillingPlans {
  name?: string;
  code?: string;
}
export interface IUpdateBillingPlans {
  name?: string;
  code?: string;
}