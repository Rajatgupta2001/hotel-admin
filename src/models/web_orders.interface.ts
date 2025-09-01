/**
 * WebOrders Model
 * Database table: weborders
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebOrders {
  id?: string;  // Primary key - auto-generated
  ordercode?: string;
  orderdate?: Date;
  apiid?: number;
  deposittotal?: number;
  totalamount?: number;
  paidamount?: number;
  status?: string;
  paymentmode?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
}

export interface ICreateWebOrders {
  ordercode?: string;
  orderdate?: Date;
  apiid?: number;
  deposittotal?: number;
  totalamount?: number;
  paidamount?: number;
  status?: string;
  paymentmode?: string;
}
export interface IUpdateWebOrders {
  ordercode?: string;
  orderdate?: Date;
  apiid?: number;
  deposittotal?: number;
  totalamount?: number;
  paidamount?: number;
  status?: string;
  paymentmode?: string;
}