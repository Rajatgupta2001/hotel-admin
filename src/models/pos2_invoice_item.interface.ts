/**
 * Pos2InvoiceItem Model
 * Database table: pos2invoiceitem
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2InvoiceItem {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
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

export interface ICreatePos2InvoiceItem {
  hotelid?: number;
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
export interface IUpdatePos2InvoiceItem {
  hotelid?: number;
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