/**
 * CorpPmntDetails Model
 * Database table: corppmntdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpPmntDetails {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  corppmntmstrid?: number;
  voucherno?: string;
  corpid?: number;
  paymenttypeid?: number;
  cardtype?: number;
  cheque?: number;
  amount?: number;
  receiptno?: string;
  description?: string;
  paymentdate?: Date;
  transactionno?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCorpPmntDetails {
  hotelid?: number;
  corppmntmstrid?: number;
  voucherno?: string;
  corpid?: number;
  paymenttypeid?: number;
  cardtype?: number;
  cheque?: number;
  amount?: number;
  receiptno?: string;
  description?: string;
  paymentdate?: Date;
  transactionno?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCorpPmntDetails {
  hotelid?: number;
  corppmntmstrid?: number;
  voucherno?: string;
  corpid?: number;
  paymenttypeid?: number;
  cardtype?: number;
  cheque?: number;
  amount?: number;
  receiptno?: string;
  description?: string;
  paymentdate?: Date;
  transactionno?: string;
  createdby?: number;
  modifiedby?: number;
}