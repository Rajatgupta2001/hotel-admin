/**
 * Pos2Invoice Model Interfaces
 * Database table: pos2Invoice
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2Invoice {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  isrefund?: number;  // Default: 0
  parentid?: number;
  parentrefno?: string;
  parentfoliono?: string;
  orderid?: number;
  foliono?: string;
  invoicenumber?: string;
  invoicetype?: string;
  guestid?: number;
  guesttype?: string;
  price?: number;  // Default: text("'0.000000'"
  shiftstatusid?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  priceaftdisc?: number;  // Default: text("'0.000000'"
  tax?: number;  // Default: text("'0.000000'"
  nettotal?: number;  // Default: text("'0.000000'"
  paymentamount?: number;  // Default: text("'0.000000'"
  settelmentstatus?: string;  // Default: text("'P'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  nadate?: Date;
  nacreatdate?: Date;
  status?: string;  // Default: 'A'
  isclosed?: number;  // Default: 0
  exttype?: string;
  extstatus?: string;  // Default: 'A'
  extid?: string;
  extedited?: number;  // Default: 0
  covers?: number;
  oldinvoiceid?: number;
  roomid?: number;
  prepino?: string;
  prevoidno?: string;
}

// Create interface - for new entity creation
export interface ICreatePos2Invoice {
  isrefund?: number;
  parentid?: number;
  parentrefno?: string;
  parentfoliono?: string;
  orderid?: number;
  foliono?: string;
  invoicenumber?: string;
  invoicetype?: string;
  guestid?: number;
  guesttype?: string;
  price?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  paymentamount?: number;
  settelmentstatus?: string;
  createdby?: number;
  modifiedby?: number;
  nadate?: Date;
  nacreatdate?: Date;
  status?: string;
  isclosed?: number;
  exttype?: string;
  extstatus?: string;
  extid?: string;
  extedited?: number;
  covers?: number;
  oldinvoiceid?: number;
  roomid?: number;
  prepino?: string;
  prevoidno?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2Invoice {
  isrefund?: number;
  parentid?: number;
  parentrefno?: string;
  parentfoliono?: string;
  orderid?: number;
  foliono?: string;
  invoicenumber?: string;
  invoicetype?: string;
  guestid?: number;
  guesttype?: string;
  price?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  paymentamount?: number;
  settelmentstatus?: string;
  createdby?: number;
  modifiedby?: number;
  nadate?: Date;
  nacreatdate?: Date;
  status?: string;
  isclosed?: number;
  exttype?: string;
  extstatus?: string;
  extid?: string;
  extedited?: number;
  covers?: number;
  oldinvoiceid?: number;
  roomid?: number;
  prepino?: string;
  prevoidno?: string;
}
