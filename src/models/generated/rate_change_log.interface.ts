/**
 * RateChangeLog Model Interfaces
 * Database table: rateChangeLog
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRateChangeLog {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  rsvid: number;  // Required
  action: string;  // Required
  fromdate: Date;  // Required
  todate: Date;  // Required
  oldpriceafterdisc?: number;  // Default: text("'0.0000000000'"
  oldtax?: number;  // Default: text("'0.0000000000'"
  newpriceafterdisc?: number;  // Default: text("'0.0000000000'"
  newtax?: number;  // Default: text("'0.0000000000'"
  reasonid?: number;
  reason?: string;
  changedetails?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  counterid?: number;
}

// Create interface - for new entity creation
export interface ICreateRateChangeLog {
  rsvid: number;
  action: string;
  fromdate: Date;
  todate: Date;
  oldpriceafterdisc?: number;
  oldtax?: number;
  newpriceafterdisc?: number;
  newtax?: number;
  reasonid?: number;
  reason?: string;
  changedetails?: string;
  createdby?: number;
  counterid?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRateChangeLog {
  rsvid?: number;
  action?: string;
  fromdate?: Date;
  todate?: Date;
  oldpriceafterdisc?: number;
  oldtax?: number;
  newpriceafterdisc?: number;
  newtax?: number;
  reasonid?: number;
  reason?: string;
  changedetails?: string;
  createdby?: number;
  counterid?: number;
}
