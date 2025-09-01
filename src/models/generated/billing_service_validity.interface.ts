/**
 * BillingServiceValidity Model Interfaces
 * Database table: billingServiceValidity
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingServiceValidity {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  billingmasterid: number;  // Required
  fromdate?: Date;
  todate?: Date;
  type?: string;
  postingamount?: number;
  postingserviceid?: number;  // Default: 0
  isstarted?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  updatedby?: number;
}

// Create interface - for new entity creation
export interface ICreateBillingServiceValidity {
  hotelid: number;
  billingmasterid: number;
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

// Update interface - for entity updates (all fields optional)
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
