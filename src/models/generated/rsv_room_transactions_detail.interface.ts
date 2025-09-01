/**
 * RsvRoomTransactionsDetail Model Interfaces
 * Database table: rsvRoomTransactionsDetail
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRoomTransactionsDetail {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvroomtransactionsid: number;  // Required
  guestid: number;  // Required
  totalprice?: number;
  discount?: number;
  discountamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  transtype: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  status: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateRsvRoomTransactionsDetail {
  hotelid: number;
  rsvroomtransactionsid: number;
  guestid: number;
  totalprice?: number;
  discount?: number;
  discountamount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotal?: number;
  transtype: string;
  createdby?: number;
  status: string;
}

// Update interface - for entity updates (all fields optional)
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
