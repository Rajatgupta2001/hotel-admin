/**
 * WebOrderDetails Model Interfaces
 * Database table: webOrderDetails
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebOrderDetails {
  id?: string;  // Primary key - auto-generated
  orderid: number;  // Required
  apiid: number;  // Required
  apichildid: number;  // Required
  hotelid: number;  // Required
  itemid: number;  // Required
  itemtype?: string;  // Default: text("'RSV'"
  checkindate: Date;  // Required
  checkoutdate: Date;  // Required
  depositamount?: number;
  totalamount?: number;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateWebOrderDetails {
  orderid: number;
  apiid: number;
  apichildid: number;
  hotelid: number;
  itemid: number;
  itemtype?: string;
  checkindate: Date;
  checkoutdate: Date;
  depositamount?: number;
  totalamount?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebOrderDetails {
  orderid?: number;
  apiid?: number;
  apichildid?: number;
  hotelid?: number;
  itemid?: number;
  itemtype?: string;
  checkindate?: Date;
  checkoutdate?: Date;
  depositamount?: number;
  totalamount?: number;
}
