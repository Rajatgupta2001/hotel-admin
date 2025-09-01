/**
 * WebOrders Model Interfaces
 * Database table: webOrders
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebOrders {
  id?: string;  // Primary key - auto-generated
  ordercode?: string;
  orderdate: Date;  // Required
  apiid: number;  // Required
  deposittotal?: number;
  totalamount?: number;
  paidamount?: number;
  status?: string;  // Default: text("'NEW'"
  paymentmode?: string;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateWebOrders {
  ordercode?: string;
  orderdate: Date;
  apiid: number;
  deposittotal?: number;
  totalamount?: number;
  paidamount?: number;
  status?: string;
  paymentmode?: string;
}

// Update interface - for entity updates (all fields optional)
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
