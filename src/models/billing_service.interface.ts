/**
 * BillingService Model
 * Database table: billingservice
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingService {
  id?: number;  // Primary key - auto-generated
  billingmasterid?: number;
  name?: string;
  code?: string;
  status?: Date;
  type?: string;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateBillingService {
  billingmasterid?: number;
  name?: string;
  code?: string;
  status?: Date;
  type?: string;
}
export interface IUpdateBillingService {
  billingmasterid?: number;
  name?: string;
  code?: string;
  status?: Date;
  type?: string;
}