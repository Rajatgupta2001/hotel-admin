/**
 * AmendmentDetails Model
 * Database table: amendmentdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAmendmentDetails {
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

export interface ICreateAmendmentDetails {
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
export interface IUpdateAmendmentDetails {
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