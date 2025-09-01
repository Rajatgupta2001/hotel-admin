/**
 * BillingAccountStatementTransTaxes Model
 * Database table: billingaccountstatementtranstaxes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IBillingAccountStatementTransTaxes {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  transid?: number;
  taxid?: number;
  amount?: number;
  taxamount?: number;
}

export interface ICreateBillingAccountStatementTransTaxes {
  hotelid?: number;
  transid?: number;
  taxid?: number;
  amount?: number;
  taxamount?: number;
}
export interface IUpdateBillingAccountStatementTransTaxes {
  hotelid?: number;
  transid?: number;
  taxid?: number;
  amount?: number;
  taxamount?: number;
}