/**
 * CorpCreditTransactions Model Interfaces
 * Database table: corpCreditTransactions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICorpCreditTransactions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  corpid: number;  // Required
  foliono: number;  // Required
  rsvid: number;  // Required
  transdate: Date;  // Required
  billamount: number;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  paid: number;  // Required
  paidtype: string;  // Required
  paidamount: number;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCorpCreditTransactions {
  hotelid: number;
  corpid: number;
  foliono: number;
  rsvid: number;
  transdate: Date;
  billamount: number;
  createdby?: number;
  status: string;
  paid: number;
  paidtype: string;
  paidamount: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCorpCreditTransactions {
  hotelid?: number;
  corpid?: number;
  foliono?: number;
  rsvid?: number;
  transdate?: Date;
  billamount?: number;
  createdby?: number;
  status?: string;
  paid?: number;
  paidtype?: string;
  paidamount?: number;
  modifiedby?: number;
}
