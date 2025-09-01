/**
 * CashCntrHistory Model Interfaces
 * Database table: cashCntrHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICashCntrHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  cashcntrid: number;  // Required
  counterstatus: number;  // Required
  effectivedate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCashCntrHistory {
  hotelid: number;
  cashcntrid: number;
  counterstatus: number;
  effectivedate: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCashCntrHistory {
  hotelid?: number;
  cashcntrid?: number;
  counterstatus?: number;
  effectivedate?: Date;
  createdby?: number;
  modifiedby?: number;
}
