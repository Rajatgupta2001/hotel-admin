/**
 * CashCntrHistory Model
 * Database table: cashcntrhistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICashCntrHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  cashcntrid?: number;
  counterstatus?: number;
  effectivedate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateCashCntrHistory {
  hotelid?: number;
  cashcntrid?: number;
  counterstatus?: number;
  effectivedate?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateCashCntrHistory {
  hotelid?: number;
  cashcntrid?: number;
  counterstatus?: number;
  effectivedate?: Date;
  createdby?: number;
  modifiedby?: number;
}