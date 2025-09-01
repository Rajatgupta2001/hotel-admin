/**
 * WebOrderDetails Model
 * Database table: weborderdetails
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebOrderDetails {
  id?: string;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateWebOrderDetails {
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