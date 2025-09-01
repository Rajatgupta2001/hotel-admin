/**
 * AllowanceRmChargeTmp2 Model Interfaces
 * Database table: allowanceRmCharge_tmp2
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAllowanceRmChargeTmp2 {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  transtype?: string;
  discount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotals?: number;
  fee?: number;
  disctranstype?: string;
  discdiscount?: number;
  discpriceaftdisc?: number;
  disctax?: number;
  discnettotal?: number;
  discfee?: number;
  isfoliogen?: number;
  foliono?: string;
  napostingdate?: Date;
}

// Create interface - for new entity creation
export interface ICreateAllowanceRmChargeTmp2 {
  hotelid?: number;
  transtype?: string;
  discount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotals?: number;
  fee?: number;
  disctranstype?: string;
  discdiscount?: number;
  discpriceaftdisc?: number;
  disctax?: number;
  discnettotal?: number;
  discfee?: number;
  isfoliogen?: number;
  foliono?: string;
  napostingdate?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAllowanceRmChargeTmp2 {
  hotelid?: number;
  transtype?: string;
  discount?: number;
  priceaftdisc?: number;
  tax?: number;
  nettotals?: number;
  fee?: number;
  disctranstype?: string;
  discdiscount?: number;
  discpriceaftdisc?: number;
  disctax?: number;
  discnettotal?: number;
  discfee?: number;
  isfoliogen?: number;
  foliono?: string;
  napostingdate?: Date;
}
