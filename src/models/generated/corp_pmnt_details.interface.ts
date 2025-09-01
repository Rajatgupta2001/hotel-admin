/**
 * CorpPmntDetails Model Interfaces
 * Database table: corpPmntDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpPmntDetails {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  corppmntmstrid: number;  // Required
  voucherno: string;  // Required
  corpid: number;  // Required
  paymenttypeid: number;  // Required
  cardtype: number;  // Required
  cheque: number;  // Required
  amount: number;  // Required
  receiptno: string;  // Required
  description: string;  // Required
  paymentdate: Date;  // Required
  transactionno: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCorpPmntDetails {
  hotelid: number;
  corppmntmstrid: number;
  voucherno: string;
  corpid: number;
  paymenttypeid: number;
  cardtype: number;
  cheque: number;
  amount: number;
  receiptno: string;
  description: string;
  paymentdate: Date;
  transactionno: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
