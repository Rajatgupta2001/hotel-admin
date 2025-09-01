/**
 * Pos2InvoiceItem Model Interfaces
 * Database table: pos2InvoiceItem
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPos2InvoiceItem {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;  // Primary key - auto-generated
  parentid?: number;  // Default: 0
  invoiceid?: number;
  kotitemid?: number;
  parentkotitemid?: number;
  productid?: number;
  productcode?: string;
  unittype?: string;
  catid?: number;
  productname?: string;
  hsncode?: string;
  saleunitprice?: number;  // Default: text("'0.000000'"
  unit?: number;
  unitprice?: number;  // Default: text("'0.000000'"
  price?: number;  // Default: text("'0.000000'"
  itemdiscount?: number;  // Default: text("'0.000000'"
  priceaftdisc?: number;  // Default: text("'0.000000'"
  tax?: number;  // Default: text("'0.000000'"
  nettotal?: number;  // Default: text("'0.000000'"
  fee?: number;  // Default: text("'0.000000'"
  discountrate?: number;  // Default: text("'0.000000'"
  discounttype?: string;  // Default: text("'PV'"
  discountreason?: string;
  reasonid?: number;
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  shiftstatusid?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  status?: string;  // Default: 'A'
  refundstatus?: string;
  externalid?: string;
  oldtransid?: number;
  chargetype?: string;  // Default: text("'F'"
}

// Create interface - for new entity creation
export interface ICreatePos2InvoiceItem {
  parentid?: number;
  invoiceid?: number;
  kotitemid?: number;
  parentkotitemid?: number;
  productid?: number;
  productcode?: string;
  unittype?: string;
  catid?: number;
  productname?: string;
  hsncode?: string;
  saleunitprice?: number;
  unit?: number;
  unitprice?: number;
  price?: number;
  itemdiscount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  discountrate?: number;
  discounttype?: string;
  discountreason?: string;
  reasonid?: number;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  status?: string;
  refundstatus?: string;
  externalid?: string;
  oldtransid?: number;
  chargetype?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePos2InvoiceItem {
  parentid?: number;
  invoiceid?: number;
  kotitemid?: number;
  parentkotitemid?: number;
  productid?: number;
  productcode?: string;
  unittype?: string;
  catid?: number;
  productname?: string;
  hsncode?: string;
  saleunitprice?: number;
  unit?: number;
  unitprice?: number;
  price?: number;
  itemdiscount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  fee?: number;
  discountrate?: number;
  discounttype?: string;
  discountreason?: string;
  reasonid?: number;
  createdby?: number;
  modifiedby?: number;
  shiftstatusid?: number;
  servinguserid?: number;
  counterid?: number;
  posid?: number;
  status?: string;
  refundstatus?: string;
  externalid?: string;
  oldtransid?: number;
  chargetype?: string;
}
