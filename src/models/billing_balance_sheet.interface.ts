/**
 * BillingBalanceSheet Model
 * Database table: billingbalancesheet
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingBalanceSheet {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  openingdate?: Date;
  openingbalance?: number;
  openingoutstanding?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateBillingBalanceSheet {
  hotelid?: number;
  grouptype?: string;
  groupid?: number;
  openingdate?: Date;
  openingbalance?: number;
  openingoutstanding?: number;
  createdby?: number;
  modifiedby?: number;
}
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