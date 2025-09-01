/**
 * CashDrawer Model
 * Database table: cashdrawer
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICashDrawer {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCashDrawer {
  hotelid?: number;
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
export interface IUpdateCashDrawer {
  hotelid?: number;
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