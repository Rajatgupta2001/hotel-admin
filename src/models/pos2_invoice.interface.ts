/**
 * Pos2Invoice Model
 * Database table: pos2invoice
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPos2Invoice {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
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

export interface ICreatePos2Invoice {
  hotelid?: number;
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
export interface IUpdatePos2Invoice {
  hotelid?: number;
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