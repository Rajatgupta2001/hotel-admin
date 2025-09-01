/**
 * BillingAccountStatementTransTaxes Model Interfaces
 * Database table: billingAccountStatementTransTaxes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IBillingAccountStatementTransTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  transid?: number;
  taxid: number;  // Required
  amount?: number;
  taxamount?: number;
}

// Create interface - for new entity creation
export interface ICreateBillingAccountStatementTransTaxes {
  hotelid: number;
  transid?: number;
  taxid: number;
  amount?: number;
  taxamount?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateBillingAccountStatementTransTaxes {
  hotelid?: number;
  transid?: number;
  taxid?: number;
  amount?: number;
  taxamount?: number;
}
