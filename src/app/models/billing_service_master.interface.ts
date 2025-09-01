/**
 * BillingServiceMaster Model
 * Database table: billingservicemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingServiceMaster {
  id?: number;  // Primary key - auto-generated
  name?: string;
  code?: string;
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateBillingServiceMaster {
  name?: string;
  code?: string;
  status?: Date;
}
export interface IUpdateBillingServiceMaster {
  name?: string;
  code?: string;
  status?: Date;
}