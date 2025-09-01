/**
 * RsvRoomTransactionsDetail Model
 * Database table: rsvroomtransactionsdetail
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRoomTransactionsDetail {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvroomtransactionsid?: number;
  guestid?: number;
  totalprice?: number;
  discount?: number;
  discountamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  transtype?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status?: string;
}

export interface ICreateRsvRoomTransactionsDetail {
  hotelid?: number;
  rsvroomtransactionsid?: number;
  guestid?: number;
  totalprice?: number;
  discount?: number;
  discountamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  transtype?: string;
  createdby?: number;
  status?: string;
}
export interface IUpdateRsvRoomTransactionsDetail {
  hotelid?: number;
  rsvroomtransactionsid?: number;
  guestid?: number;
  totalprice?: number;
  discount?: number;
  discountamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  transtype?: string;
  createdby?: number;
  status?: string;
}