/**
 * RateChangeLog Model
 * Database table: ratechangelog
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRateChangeLog {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  counterid?: number;
}

export interface ICreateRateChangeLog {
  hotelid?: number;
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
export interface IUpdateRateChangeLog {
  hotelid?: number;
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