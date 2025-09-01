/**
 * CashCounterSession Model Interfaces
 * Database table: cashCounterSession
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICashCounterSession {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  counterid: number;  // Required
  counterstatus?: string;  // Default: text("'OPEN'"
  servopenedon: Date;  // Required
  servclosedon?: Date;
  openedon: Date;  // Required
  closedon?: Date;
  naopenedon: Date;  // Required
  naclosedon?: Date;
  nadate: Date;  // Required
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateCashCounterSession {
  hotelid: number;
  counterid: number;
  counterstatus?: string;
  servopenedon: Date;
  servclosedon?: Date;
  openedon: Date;
  closedon?: Date;
  naopenedon: Date;
  naclosedon?: Date;
  nadate: Date;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCashCounterSession {
  hotelid?: number;
  counterid?: number;
  counterstatus?: string;
  servopenedon?: Date;
  servclosedon?: Date;
  openedon?: Date;
  closedon?: Date;
  naopenedon?: Date;
  naclosedon?: Date;
  nadate?: Date;
  createdby?: number;
}
