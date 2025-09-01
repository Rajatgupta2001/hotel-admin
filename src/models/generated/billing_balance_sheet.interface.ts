/**
 * BillingBalanceSheet Model Interfaces
 * Database table: billingBalanceSheet
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingBalanceSheet {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  grouptype?: string;
  groupid?: number;
  openingdate: Date;  // Required
  openingbalance?: number;  // Default: text("'0.000000'"
  openingoutstanding?: number;  // Default: text("'0.000000'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateBillingBalanceSheet {
  hotelid: number;
  grouptype?: string;
  groupid?: number;
  openingdate: Date;
  openingbalance?: number;
  openingoutstanding?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingBalanceSheet {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  openingdate?: Date;
  openingbalance?: number;
  openingoutstanding?: number;
  createdby?: number;
  modifiedby?: number;
}
