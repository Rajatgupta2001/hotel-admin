/**
 * AmendmentDetails Model Interfaces
 * Database table: amendmentDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAmendmentDetails {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  groupid?: number;  // Default: 0
  checkindate: Date;  // Required
  checkoutdate: Date;  // Required
  newcheckindate: Date;  // Required
  newcheckoutdate: Date;  // Required
  priceaftdisc?: number;
  newpriceaftdisc?: number;
  description: string;  // Required
  nadate: Date;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAmendmentDetails {
  hotelid: number;
  rsvid: number;
  groupid?: number;
  checkindate: Date;
  checkoutdate: Date;
  newcheckindate: Date;
  newcheckoutdate: Date;
  priceaftdisc?: number;
  newpriceaftdisc?: number;
  description: string;
  nadate: Date;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
