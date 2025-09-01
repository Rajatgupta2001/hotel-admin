/**
 * AmendmentSummary Model
 * Database table: amendmentsummary
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAmendmentSummary {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  newcheckindate?: Date;
  newcheckoutdate?: Date;
  priceaftdisc?: number;
  newpriceaftdisc?: number;
  description?: string;
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateAmendmentSummary {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  newcheckindate?: Date;
  newcheckoutdate?: Date;
  priceaftdisc?: number;
  newpriceaftdisc?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateAmendmentSummary {
  hotelid?: number;
  rsvid?: number;
  groupid?: number;
  checkindate?: Date;
  checkoutdate?: Date;
  newcheckindate?: Date;
  newcheckoutdate?: Date;
  priceaftdisc?: number;
  newpriceaftdisc?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
}