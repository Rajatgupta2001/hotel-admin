/**
 * CashDrawer Model Interfaces
 * Database table: cashDrawer
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICashDrawer {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  counterid: number;  // Required
  countersessionid?: number;
  payid: number;  // Required
  openingbalance?: number;  // Default: text("'0.000000'"
  cashamount?: number;  // Default: text("'0.000000'"
  withdrawal?: number;  // Default: text("'0.000000'"
  added?: number;  // Default: text("'0.000000'"
  discrepency: string;  // Required
  discrepencyamount?: number;  // Default: text("'0.000000'"
  closingamount?: number;  // Default: text("'0.000000'"
  posamount?: number;  // Default: text("'0.000000'"
  frontdeskamount?: number;  // Default: text("'0.000000'"
  prevposbalance?: number;  // Default: text("'0.000000'"
  prevfrontdeskbalance?: number;  // Default: text("'0.000000'"
  prevwithdrawal?: number;  // Default: text("'0.000000'"
  prevadded?: number;  // Default: text("'0.000000'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCashDrawer {
  counterid: number;
  countersessionid?: number;
  payid: number;
  openingbalance?: number;
  cashamount?: number;
  withdrawal?: number;
  added?: number;
  discrepency: string;
  discrepencyamount?: number;
  closingamount?: number;
  posamount?: number;
  frontdeskamount?: number;
  prevposbalance?: number;
  prevfrontdeskbalance?: number;
  prevwithdrawal?: number;
  prevadded?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCashDrawer {
  counterid?: number;
  countersessionid?: number;
  payid?: number;
  openingbalance?: number;
  cashamount?: number;
  withdrawal?: number;
  added?: number;
  discrepency?: string;
  discrepencyamount?: number;
  closingamount?: number;
  posamount?: number;
  frontdeskamount?: number;
  prevposbalance?: number;
  prevfrontdeskbalance?: number;
  prevwithdrawal?: number;
  prevadded?: number;
  createdby?: number;
  modifiedby?: number;
}
