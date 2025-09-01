/**
 * CashCounterSession Model
 * Database table: cashcountersession
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICashCounterSession {
  id?: string;  // Primary key - auto-generated
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
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateCashCounterSession {
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