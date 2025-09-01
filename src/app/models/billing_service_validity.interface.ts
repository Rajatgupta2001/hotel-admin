/**
 * BillingServiceValidity Model
 * Database table: billingservicevalidity
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingServiceValidity {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  billingmasterid?: number;
  fromdate?: Date;
  todate?: Date;
  type?: string;
  postingamount?: number;
  postingserviceid?: number;
  isstarted?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;
  updatedby?: number;
}

export interface ICreateBillingServiceValidity {
  hotelid?: number;
  billingmasterid?: number;
  fromdate?: Date;
  todate?: Date;
  type?: string;
  postingamount?: number;
  postingserviceid?: number;
  isstarted?: number;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
}
export interface IUpdateBillingServiceValidity {
  hotelid?: number;
  billingmasterid?: number;
  fromdate?: Date;
  todate?: Date;
  type?: string;
  postingamount?: number;
  postingserviceid?: number;
  isstarted?: number;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
}